import React from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import HamburguerMenu from "./assets/icons/HamburgerMenu";
import BottleWine from "./assets/icons/BottleWine";
import DollarSymbol from "./assets/icons/DollarSymbol";
import Avatar from "./assets/icons/Avatar";
import Quantity from "./assets/icons/Quantity";
import Plus from "./assets/icons/Plus";
import MinusSymbol from "./assets/icons/MinusSymbol";
import PlusSymbol from "./assets/icons/PlusSymbol";
import styles from "./styles"; // Import the styles object from the previous conversion

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hamburgerMenu}>
          <HamburguerMenu />
        </View>
        <Text style={styles.headerText}>SMART WATER</Text>
      </View>
      <Text style={styles.heading}>Registrar nueva venta</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Avatar />
          <TextInput
            style={styles.fieldInput}
            placeholder="Número de cliente"
          />
        </View>

        <View style={styles.formGroup}>
          <BottleWine />
          <Picker style={styles.fieldInput}>
            <Picker.Item label="Producto" value="" />
          </Picker>
        </View>

        <View style={styles.formGroup}>
          <View style={styles.quantityLabelWrapper}>
            <Quantity />
            <Text style={styles.labelInput}>Cantidad</Text>
          </View>

          <View style={styles.quantityButtonsWrapper}>
            <MinusSymbol />
            <TextInput
              style={[styles.fieldInput, styles.quantityInput]}
              keyboardType="numeric"
              value="01"
            />
            <PlusSymbol />
          </View>
        </View>

        <View style={styles.formGroup}>
          <DollarSymbol />
          <TextInput
            style={styles.fieldInput}
            placeholder="Agregar precio"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.addMoreButtonWrapper}>
          <View style={styles.addMoreButton}>
            <Plus />
            <Text style={styles.buttonLabel}>Agregar otro producto</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.buttonLabel}>Vender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
