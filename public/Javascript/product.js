const products = [
    {
      id: "product1",
      itemSrc: "../Image/Home/Product1.jpeg",
      name: "Flame Fur Cardigan",
      price: "Rp 270.000"
    },
    {
      id: "product2",
      itemSrc: "../Image/Home/Product2.jpeg",
      name: "Black Tartan Shirt",
      price: "Rp 200.000"
    },
    {
      id: "product3",
      itemSrc: "../Image/Home/Product3.jpeg",
      name: "Milky Leather Jacket",
      price: "Rp 400.000"
    },
    {
      id: "product4",
      itemSrc: "../Image/Home/Product4.jpeg",
      name: "Milky sport set",
      price: "Rp 300.000"
    },
    {
      id: "product5",
      itemSrc: "../Image/Home/Product5.jpeg",
      name: "A-line black skirt",
      price: "Rp 175.000"
    },
    {
      id: "product6",
      itemSrc: "../Image/Home/Product6.jpeg",
      name: "BlueSky Graphic SwetShirt",
      price: "Rp 150.000"
    },
    {
      id: "product7",
      itemSrc: "../Image/Home/Product7.jpeg",
      name: "Lime Green Oversized Shirt",
      price: "Rp 180.000"
    },
    {
      id: "product8",
      itemSrc: "../Image/Home/product8.jpeg",
      name: "A-Line White Midi Skirt",
      price: "Rp 150.000"
    }
]

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("Load Page")
  let row = document.getElementById("row");
    products.forEach((product, index)=>{
      let div = document.createElement("div");
      div.setAttribute("id", `${product.id}`);
      let img = document.createElement("img");
      img.setAttribute("class", "b");
      img.setAttribute("alt", "");
      img.setAttribute("src", `${product.itemSrc}`);
      div.appendChild(img);
      let imageDesc = document.createElement("div");
      imageDesc.setAttribute("class", "img-desc");
      let gambarLink = document.createElement("a");
      gambarLink.setAttribute("href", `#gambar-${index}`);
      let button = document.createElement("button");
      button.innerHTML = "DESCRIBE";
      gambarLink.appendChild(button);
      imageDesc.appendChild(gambarLink);
      div.appendChild(imageDesc);
      let h4 = document.createElement("h4");
      h4.innerHTML= `${product.name}`;
      let p = document.createElement("p");
      p.innerHTML= `${product.price}`;
      div.appendChild(h4);
      div.appendChild(p);
      row.appendChild(div);
      // items.innerHTML+=`<div id=${product.id}>
      // <img class="b" src=${product.itemSrc} alt="">
      // <div class="img-desc">
      //   <a href="#gambar-${index}">
      //     <button>DESCRIBE</button>
      //   </a>
      // </div>
      // <h3>${product.name}</h3>
      // <h5>${product.price}</h5>
      // </div>`
    });

})

