import React, { useState } from 'react';
import "../styles/About.css";

const bookData = {
    "fiction": [
        {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
        {"title": "1984", "author": "George Orwell", "price": 8.50},
        {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
        {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
        {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
        {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
        {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
        {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
        {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
};

const Header = ({ handleGenreChange }) => {
    return (
        <div className={"header"}>
            <button onClick={() => handleGenreChange("fiction")}>View fiction books</button>
            <button onClick={() => handleGenreChange("non-fiction")}>View non-fiction books</button>
            <button onClick={() => handleGenreChange("children")}>View children's books</button>
        </div>
    );
};

const Books = ({ genre, handleBasketAddition }) => {
    return (
        <div className={"books"}>
            {genre && (
                <>
                    <p>Here are our books in your selected genre:</p>
                    <ul>
                        {bookData[genre].map((book, index) => (
                            <li key={index}>
                                <button
                                    className={"add-to-basket"}
                                    onClick={() => handleBasketAddition(book)}>
                                    Add to basket</button>
                                {book.title} by  {book.author} (${book.price})
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

const Basket = ({ basket, handleBasketRemoval }) => {
    return (
        <div className={"basket"}>
            <p>Here is your basket:</p>
            <ul>
                {basket.map((book, index) => (
                    <li key={index}>
                        <button onClick={() => handleBasketRemoval(index)}>Remove</button>
                        {book.title} by  {book.author} (${book.price})
                    </li>
                ))}
            </ul>
        </div>
    );
};

const About = () => {
    const [genre, setGenre] = useState(null);
    const [basket, setBasket] = useState([]);

    const handleGenreChange = (type) => {
        setGenre(type);
    };

    const handleBasketAddition = (book) =>{
        setBasket([...basket, book]);
        console.log(basket);
    };

    const handleBasketRemoval = (index) => {
        const newBasket = basket.filter((item, i) => i !== index);
        setBasket(newBasket);
    };

    return (
        <>
            <Header handleGenreChange={handleGenreChange} />
            <Books genre={genre} handleBasketAddition={handleBasketAddition} />
            <Basket basket={basket} handleBasketRemoval={handleBasketRemoval} />
        </>
    );
};

export default About;

