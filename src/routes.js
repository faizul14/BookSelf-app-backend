import books from "./books.js";
import { addBooksHandler, deleteById, getAllBooksHandler, getBookById, updateById } from "./handler.js";


const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            const response = h.response({
                status : 'succes',
                code : 200,
                message : 'server bejalan dengan aman',
                data : books,
            });

            response.code(200);
            return response;
        }
    },
    {
        method : 'POST',
        path : '/books',
        handler : addBooksHandler,
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBooksHandler,
    },
    {
        method : 'GET',
        path : '/books/{bookId}',
        handler : getBookById,
    },
    {
        method : 'PUT',
        path : '/books/{bookId}',
        handler : updateById,
    },
    {
        method : 'DELETE',
        path : '/books/{bookId}',
        handler : deleteById,
    }
]


export default routes;