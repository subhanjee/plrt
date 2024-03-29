import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import CreatePost from "../../components/createPost";
import Selling from "../../components/selling";
 

function CreateItems() {
  return (
    <div className="bg-whole">
      <Header />
      <CreatePost/>
      <Selling/>
      <Footer />
    </div>
  );
}

export default CreateItems;
