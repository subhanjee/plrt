import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import CreatePost from "../../components/createPost";
 

function CreateItems() {
  return (
    <div className="bg-whole">
      <Header />
      <CreatePost/>
      <Footer />
    </div>
  );
}

export default CreateItems;
