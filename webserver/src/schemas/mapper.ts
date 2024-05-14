export const roles = {
  roleId: {
    key: 'roleId', dbKey: 'role_id', type: 'integer', required: true, foreignkey: '',
  },
  roleName: {
    key: 'roleName', dbKey: 'role_name', type: 'character varying(50)', required: true, foreignkey: '',
  },
};
export const bookCopies = {
  bookId: {
    key: 'bookId', dbKey: 'book_id', type: 'integer', required: true, foreignkey: 'bookCopies',
  },
  copyNumber: {
    key: 'copyNumber', dbKey: 'copy_number', type: 'integer', required: true, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'character varying(20)', required: true, foreignkey: '',
  },
};
export const loans = {
  loanId: {
    key: 'loanId', dbKey: 'loan_id', type: 'integer', required: true, foreignkey: '',
  },
  bookId: {
    key: 'bookId', dbKey: 'book_id', type: 'integer', required: false, foreignkey: 'loans',
  },
  memberId: {
    key: 'memberId', dbKey: 'member_id', type: 'integer', required: false, foreignkey: 'loans',
  },
  loanDate: {
    key: 'loanDate', dbKey: 'loan_date', type: 'date', required: true, foreignkey: '',
  },
  dueDate: {
    key: 'dueDate', dbKey: 'due_date', type: 'date', required: true, foreignkey: '',
  },
  returnedDate: {
    key: 'returnedDate', dbKey: 'returned_date', type: 'date', required: false, foreignkey: '',
  },
  issuedBy: {
    key: 'issuedBy', dbKey: 'issued_by', type: 'integer', required: false, foreignkey: 'loans',
  },
};
export const books = {
  bookId: {
    key: 'bookId', dbKey: 'book_id', type: 'integer', required: true, foreignkey: '',
  },
  title: {
    key: 'title', dbKey: 'title', type: 'character varying(255)', required: true, foreignkey: '',
  },
  authorId: {
    key: 'authorId', dbKey: 'author_id', type: 'integer', required: false, foreignkey: 'books',
  },
  isbn: {
    key: 'isbn', dbKey: 'isbn', type: 'character varying(20)', required: false, foreignkey: '',
  },
  publicationDate: {
    key: 'publicationDate', dbKey: 'publication_date', type: 'date', required: false, foreignkey: '',
  },
  genre: {
    key: 'genre', dbKey: 'genre', type: 'character varying(50)', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'integer', required: false, foreignkey: 'books',
  },
  createdOn: {
    key: 'createdOn', dbKey: 'created_on', type: 'timestamp without time zone', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'integer', required: false, foreignkey: 'books',
  },
  updatedOn: {
    key: 'updatedOn', dbKey: 'updated_on', type: 'timestamp without time zone', required: false, foreignkey: '',
  },
};
export const bookShelves = {
  shelfId: {
    key: 'shelfId', dbKey: 'shelf_id', type: 'character varying(20)', required: true, foreignkey: '',
  },
  bookId: {
    key: 'bookId', dbKey: 'book_id', type: 'integer', required: false, foreignkey: 'bookShelves',
  },
  copyNumber: {
    key: 'copyNumber', dbKey: 'copy_number', type: 'integer', required: false, foreignkey: 'bookShelves',
  },
  shelfLocation: {
    key: 'shelfLocation', dbKey: 'shelf_location', type: 'character varying(50)', required: false, foreignkey: '',
  },
};
export const authors = {
  authorId: {
    key: 'authorId', dbKey: 'author_id', type: 'integer', required: true, foreignkey: '',
  },
  firstName: {
    key: 'firstName', dbKey: 'first_name', type: 'character varying(50)', required: true, foreignkey: '',
  },
  lastName: {
    key: 'lastName', dbKey: 'last_name', type: 'character varying(50)', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'integer', required: false, foreignkey: 'authors',
  },
  createdOn: {
    key: 'createdOn', dbKey: 'created_on', type: 'timestamp without time zone', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'integer', required: false, foreignkey: 'authors',
  },
  updatedOn: {
    key: 'updatedOn', dbKey: 'updated_on', type: 'timestamp without time zone', required: false, foreignkey: '',
  },
};
export const members = {
  memberId: {
    key: 'memberId', dbKey: 'member_id', type: 'integer', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'character varying(100)', required: true, foreignkey: '',
  },
  email: {
    key: 'email', dbKey: 'email', type: 'character varying(100)', required: false, foreignkey: '',
  },
  membershipType: {
    key: 'membershipType', dbKey: 'membership_type', type: 'character varying(20)', required: false, foreignkey: '',
  },
  roleId: {
    key: 'roleId', dbKey: 'role_id', type: 'integer', required: false, foreignkey: 'members',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'integer', required: false, foreignkey: 'members',
  },
  createdOn: {
    key: 'createdOn', dbKey: 'created_on', type: 'timestamp without time zone', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'integer', required: false, foreignkey: 'members',
  },
  updatedOn: {
    key: 'updatedOn', dbKey: 'updated_on', type: 'timestamp without time zone', required: false, foreignkey: '',
  },
};
