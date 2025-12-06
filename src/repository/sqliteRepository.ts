import Database, { Database as DatabaseType } from 'better-sqlite3';
import type { Statement } from 'better-sqlite3';


import { DATA, REPORT } from '../utils/config';
import { INewsRepository } from './iNewsRepository';
import { News } from '../models/news';

export class SQLiteRepository implements INewsRepository{

  private db: DatabaseType;

  private insertStmt: Statement;
  private updateStmt: Statement;
  private loadStmt: Statement;
  private findByIdStmt: Statement<{ id: number, url: string, status: string}>;
  private deleteStmt: Statement;
  private searchStatusStmt: Statement;
  private countAllStmt: Statement<{ total: number}>;
  private countEachStmt: Statement<{ total: number}>;

  constructor() {

    const dbPath = DATA;
    this.db = new Database(dbPath);

    this.db
    
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      status TEXT NOT NULL
      )
    `);


    this.insertStmt = this.db.prepare(`
      INSERT INTO news (url, status) VALUES (?, ?)`);
    

    this.updateStmt = this.db.prepare(`
      UPDATE news SET status = ? WHERE id = ?`);


    this.loadStmt = this.db.prepare(`SELECT * FROM news`);

    
    this.findByIdStmt = this.db.prepare(`
      SELECT id, url, status FROM news WHERE id = ?`);

    
    this.deleteStmt = this.db.prepare(`
      DELETE FROM news WHERE id = ?`);


    this.searchStatusStmt = this.db.prepare(`
      SELECT * FROM news WHERE status = ?`);  


    this.countAllStmt = this.db.prepare(`
      SELECT COUNT(*) FROM news`);

    
    this.countEachStmt = this.db.prepare(`
      SELECT COUNT(*) FROM news WHERE status = ?`);
  }

}