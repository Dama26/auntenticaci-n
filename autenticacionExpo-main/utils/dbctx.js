import React, { createContext, useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

const DB_NAME = 'todo.db';
const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  }, []);


  const fetchTasks = (database = db) => {
    if (!database) return;
    database.transaction(tx => {
      tx.executeSql('SELECT * FROM tasks;', [], (_, { rows }) => {
        setTasks(rows._array);
      });
    });
  };


  const addTask = (task) => {
    if (!db) return;
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tasks (task) VALUES (?);',
        [task],
        () => fetchTasks()
      );
    });
  };


  const updateTask = (id, task) => {
    if (!db) return;
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE tasks SET task = ? WHERE id = ?;',
        [task, id],
        () => fetchTasks()
      );
    });
  };

  const deleteTask = (id) => {
    if (!db) return;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?;',
        [id],
        () => fetchTasks()
      );
    });
  };

  return (
    <DatabaseContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;
