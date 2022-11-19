import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Constants from "../../constants/Constants";

export default function LargeDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Queda de Energia', value: 'LowEnergy'},
    {label: "Falta d'àgua", value: 'LowWater'},
    {label: "Resgate de animais", value: 'AnimalRescue'},
    {label: "Problemas estruturais", value: 'StructureProblems'},
    {label: "Outros", value: 'Others'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder={"Selecione o tipo da denúncia"}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      selectedItemLabelStyle={{
        color: Constants.colors.primary[900]
      }}
      style={{
        backgroundColor: Constants.colors.gray[900],
        borderWidth: 0,
        borderRadius: 6,
      }}
      textStyle={{
        color: Constants.colors.gray[650]
      }}
      dropDownContainerStyle={{
        backgroundColor: Constants.colors.gray[900]
      }}
    />
  );
}