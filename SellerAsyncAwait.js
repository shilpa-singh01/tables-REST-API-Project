


window.onload = async function() {
    try {
      const response = await axios.get("https://crudcrud.com/api/8bce22d4e2c7462dbae720d1de361974/sellerProductData");
      const data = response.data;
      const ul1 = document.getElementById("mWear");
      const ul2 = document.getElementById("electron");
      const ul3 = document.getElementById("fashion");
      const ul4 = document.getElementById("toys");
  
      data.forEach((item) => {
        const li = document.createElement("Li");
        li.textContent = `Price : ${item.price} Dish_Name : ${item.productName} Table : ${item.select}`;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          detelebutton(item._id, li);
        });
        li.appendChild(deleteBtn);
  
        if (item.select === "Table 1") {
          ul1.appendChild(li);
        } else if (item.select === "Table 2") {
          ul2.appendChild(li);
        } else if (item.select === "Table 3") {
          ul3.appendChild(li);
        } else if (item.select === "Table 4") {
          ul4.appendChild(li);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  //delete button functionality
  async function detelebutton(id, li) {
    try {
      await axios.delete(`https://crudcrud.com/api/8bce22d4e2c7462dbae720d1de361974/sellerProductData/${id}`);
      li.remove();
    } catch (err) {
      console.log(err);
    }
  }
  
  //Main code
  const mainButton = document.getElementById("btn");
  const ul1 = document.getElementById("mWear");
  const ul2 = document.getElementById("electron");
  const ul3 = document.getElementById("fashion");
  const ul4 = document.getElementById("toys");
  
  mainButton.addEventListener("click", async (event) => {
    event.preventDefault();
  
    const price = document.getElementById("sPrise").value;
    const productName = document.getElementById("productName").value;
    const select = document.getElementById("select").value;
  
    const obj = {
      price,
      productName,
      select,
    };
  
    //save on backend(crud) using Axios:-
    try {
      const response = await axios.post("https://crudcrud.com/api/8bce22d4e2c7462dbae720d1de361974/sellerProductData", obj);
  
      //show data on screen:-
      const li = document.createElement("Li");
      li.textContent = `Price : ${response.data.price}  Dish_Name : ${response.data.productName} Tables : ${response.data.select}`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.addEventListener("click", () => {
        detelebutton(response.data._id, li);
      });
      li.appendChild(deleteBtn);
  
      if (obj.select === "Table 1") {
        ul1.append(li);
      } else if (obj.select === "Table 2") {
        ul2.append(li);
      } else if (obj.select === "Table 3") {
        ul3.append(li);
      } else if (obj.select === "Table 4") {
        ul4.append(li);
      }
    } catch (err) {
      console.log(err);
    }
  });
  




