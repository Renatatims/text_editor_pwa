import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// putDb Method - accepts some content and adds it to the database
//console.error('putDb not implemented')
export const putDb = async (content) => {
  const textDb = await openDB("text", 1);
  const tx = textDb.transaction("text", "readwrite");
  const store = tx.objectStore("text");
  const request = store.put({ id: id, text: content });
  const result = await request;
  console.log("data saved to the database", result);
};

// getAll method - gets all the content from the database
//console.error("getDb not implemented");
export const getDb = async () => {
  const textDb = await openDB("text", 1);
  const tx = textDb.transaction("text", "readonly");
  const store = tx.objectStore("text");
  const request = store.getAll();
  const result = await request;
  console.log("get all values", result);
  return result; 
};

initdb();
