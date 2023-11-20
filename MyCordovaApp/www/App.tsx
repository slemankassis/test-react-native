import React from "react";
import { HamburguerMenu } from "./assets/icons/HamburgerMenu";
import { BottleWine } from "./assets/icons/BottleWine";
import { DollarSymbol } from "./assets/icons/DollarSymbol";
import "./App.css";
import { Avatar } from "./assets/icons/Avatar";
import { Quantity } from "./assets/icons/Quantity";
import { Plus } from "./assets/icons/Plus";
import { MinusSymbol } from "./assets/icons/MinusSymbol";
import { PlusSymbol } from "./assets/icons/PlusSymbol";

function App() {
  return (
    <div>
      <div className="header">
        <div className="hamburgerMenu">
          <HamburguerMenu />
        </div>
        <h1>SMART WATER</h1>
      </div>
      <h2>Registrar nueva venta</h2>
      <form>
        <div className="form-group">
          <Avatar />
          {/* <label htmlFor="clientNumber">Número de cliente</label> */}
          <input
            className="fieldInput"
            id="clientNumber"
            name="clientNumber"
            type="text"
            placeholder="Número de cliente"
          />
        </div>

        <div className="form-group">
          <BottleWine />
          {/* <label htmlFor="product">Producto</label> */}
          <select className="fieldInput selectInput" id="product">
            <option>Producto</option>
          </select>
        </div>

        <div className="form-group">
          <div className="quantityLabelWrapper">
            <Quantity />
            <label htmlFor="quantity" className="labelInput">
              Cantidad
            </label>
          </div>

          <div className="quantityButtonsWrapper">
            <MinusSymbol />
            <input
              className="fieldInput quantityInput"
              type="text"
              value="01"
            />
            <PlusSymbol />
          </div>
        </div>

        <div className="form-group">
          <DollarSymbol />
          {/* <label htmlFor="price">Agregar precio</label> */}
          <input
            className="fieldInput"
            id="price"
            name="price"
            type="number"
            placeholder="Agregar precio"
          />
        </div>

        <div className="addMoreButtonWrapper">
          <div className="addMoreButton">
            <Plus />
            <span className="buttonLabel">Agregar otro producto</span>
          </div>
        </div>

        <input className="sellButton" type="submit" value="Vender" />
      </form>
    </div>
  );
}

export default App;
