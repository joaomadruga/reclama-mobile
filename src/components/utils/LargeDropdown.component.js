import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Constants from "../../constants/Constants";

export default function LargeDropdown({ inputState }) {
  const { inputText, setInputText } = inputState;
  const [ value, setValue ] = useState(null)
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: "Problemas estruturais", value: 0},
    {label: "Violência", value: 1},
    {label: "Manutenção de ruas", value: 2},
    {label: 'Queda de Energia', value: 3},
    {label: "Acidentes", value: 4},
    {label: "Resgate de animais", value: 5},
    {label: "Outros", value: 6},
  ]);

  const handleChange = (value) => {
    setInputText(prev => ({...prev, ["type"]: value}))
  };

  useEffect(() => {
    handleChange(value);
  }, [value]);
  return (
    <DropDownPicker
      open={open}
      value={inputText}
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