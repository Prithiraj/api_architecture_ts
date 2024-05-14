import { getCurrentDate } from '../utils/utils';
import {
  roles,
  bookCopies,
  loans,
  books,
  bookShelves,
  authors,
  members,
} from './mapper';

export const roles_ajv = {
  roleId: {
    name: roles.roleId.key,
    api: { type: 'integer' },
    required: true,
  },
  roleName: {
    name: roles.roleName.key,
    api: { type: 'string' },
    required: true,
  },
};
export const bookCopies_ajv = {
  bookId: {
    name: bookCopies.bookId.key,
    api: { type: 'integer' },
    fk: 'bookCopies_ajv',
    required: true,
  },
  copyNumber: {
    name: bookCopies.copyNumber.key,
    api: { type: 'integer' },
    required: true,
  },
  status: {
    name: bookCopies.status.key,
    api: { type: 'string' },
    required: true,
  },
};
export const loans_ajv = {
  loanId: {
    name: loans.loanId.key,
    api: { type: 'integer' },
    required: true,
  },
  bookId: {
    name: loans.bookId.key,
    api: { type: 'integer' },
    fk: 'loans_ajv',
    required: false,
  },
  memberId: {
    name: loans.memberId.key,
    api: { type: 'integer' },
    fk: 'loans_ajv',
    required: false,
  },
  loanDate: {
    name: loans.loanDate.key,
    api: { type: 'string' },
    required: true,
  },
  dueDate: {
    name: loans.dueDate.key,
    api: { type: 'string' },
    required: true,
  },
  returnedDate: {
    name: loans.returnedDate.key,
    api: { type: 'string' },
    required: false,
  },
  issuedBy: {
    name: loans.issuedBy.key,
    api: { type: 'integer' },
    fk: 'loans_ajv',
    required: false,
  },
};
export const books_ajv = {
  bookId: {
    name: books.bookId.key,
    api: { type: 'integer' },
    required: true,
  },
  title: {
    name: books.title.key,
    api: { type: 'string' },
    required: true,
  },
  authorId: {
    name: books.authorId.key,
    api: { type: 'integer' },
    fk: 'books_ajv',
    required: false,
  },
  isbn: {
    name: books.isbn.key,
    api: { type: 'string' },
    required: false,
  },
  publicationDate: {
    name: books.publicationDate.key,
    api: { type: 'string' },
    required: false,
  },
  genre: {
    name: books.genre.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: books.createdBy.key,
    api: { type: 'integer' },
    fk: 'books_ajv',
    required: false,
  },
  createdOn: {
    name: books.createdOn.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: books.updatedBy.key,
    api: { type: 'integer' },
    fk: 'books_ajv',
    required: false,
  },
  updatedOn: {
    name: books.updatedOn.key,
    api: { type: 'string' },
    required: false,
  },
};
export const bookShelves_ajv = {
  shelfId: {
    name: bookShelves.shelfId.key,
    api: { type: 'string' },
    required: true,
  },
  bookId: {
    name: bookShelves.bookId.key,
    api: { type: 'integer' },
    fk: 'bookShelves_ajv',
    required: false,
  },
  copyNumber: {
    name: bookShelves.copyNumber.key,
    api: { type: 'integer' },
    fk: 'bookShelves_ajv',
    required: false,
  },
  shelfLocation: {
    name: bookShelves.shelfLocation.key,
    api: { type: 'string' },
    required: false,
  },
};
export const authors_ajv = {
  authorId: {
    name: authors.authorId.key,
    api: { type: 'integer' },
    required: true,
  },
  firstName: {
    name: authors.firstName.key,
    api: { type: 'string' },
    required: true,
  },
  lastName: {
    name: authors.lastName.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: authors.createdBy.key,
    api: { type: 'integer' },
    fk: 'authors_ajv',
    required: false,
  },
  createdOn: {
    name: authors.createdOn.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: authors.updatedBy.key,
    api: { type: 'integer' },
    fk: 'authors_ajv',
    required: false,
  },
  updatedOn: {
    name: authors.updatedOn.key,
    api: { type: 'string' },
    required: false,
  },
};
export const members_ajv = {
  memberId: {
    name: members.memberId.key,
    api: { type: 'integer' },
    required: true,
  },
  name: {
    name: members.name.key,
    api: { type: 'string' },
    required: true,
  },
  email: {
    name: members.email.key,
    api: { type: 'string', format: 'email', default: getCurrentDate() },
    required: false,
  },
  membershipType: {
    name: members.membershipType.key,
    api: { type: 'string' },
    required: false,
  },
  roleId: {
    name: members.roleId.key,
    api: { type: 'integer' },
    fk: 'members_ajv',
    required: false,
  },
  createdBy: {
    name: members.createdBy.key,
    api: { type: 'integer' },
    fk: 'members_ajv',
    required: false,
  },
  createdOn: {
    name: members.createdOn.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: members.updatedBy.key,
    api: { type: 'integer' },
    fk: 'members_ajv',
    required: false,
  },
  updatedOn: {
    name: members.updatedOn.key,
    api: { type: 'string' },
    required: false,
  },
};
