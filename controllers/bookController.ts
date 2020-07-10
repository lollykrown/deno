import { Context } from "https://deno.land/x/abc@v1/mod.ts";
import {Book} from '../models/book.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

let books: Book[] = [
  {id: '1', title: 'name of the wind', author: 'patrick Rothfuss', pages: 500},
  {id: '2', title: 'name of the wind 2', author: 'patrick Rothfuss', pages: 200},
  {id: '3', title: 'name of the wind 3', author: 'patrick Rothfuss', pages: 400}
]
export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200)
}
export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    return ctx.json(book, 200)
  }
  return ctx.string('no book found with the id', 404)
  // return ctx.json(books[+id], 200)
}
export const create_book = async (ctx: Context) => {
  const {title, author, pages } = await ctx.body();
  const id = v4.generate();
  const book = { id, title, author, pages }
  books.push(book)

  return ctx.json(book, 20)
}
export const delete_books = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string('no book found with the id', 404)
}