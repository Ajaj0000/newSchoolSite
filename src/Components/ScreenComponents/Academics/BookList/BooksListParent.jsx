import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { BooksList } from "./BooksList";

function BooksListParent() {
    return (
        <>
        <Navbar/>
        <CommonBanner head={"List Of Books Prescribe"}/>
        <BooksList/>
        <Footer/>
        </>
    )
}
export { BooksListParent }