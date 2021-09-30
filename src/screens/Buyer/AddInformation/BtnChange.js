import { Button, HStack, FormControl } from "native-base";
import plate from "../../../styles/plate";
import React from "react";
import { useDispatch } from "react-redux";
import { setBuyer, setCar, setHouse, setLook, setMoney, setNum } from "../../../store/slices/addinformation";

const BtnChange = (props) => {
  const [btn1color, setbtn1color] = React.useState("rgb(220,220,220)");
  const [btn2color, setbtn2color] = React.useState("rgb(220,220,220)");
  const dispatch = useDispatch();
  const btnChange = (data) => {
    if (props.label === "") {
      dispatch(setBuyer(data));
    } else if(props.label === "帶看過") {
      dispatch(setLook(data));
    }
		else if(props.label === "坪數") {
      dispatch(setNum(data));
    }
		else if(props.label === "價位") {
      dispatch(setMoney(data));
    }
		else if(props.label === "房數") {
      dispatch(setHouse(data));
    }
		else if(props.label === "車位") {
      dispatch(setCar(data));
    }
  };

  return (
      <HStack alignItems="center">
        <FormControl.Label>{props.label}</FormControl.Label>
        <Button
          size="sm"
          bg={btn1color}
          onPress={() => {
            {
              btnChange(props.name1),
                setbtn1color(plate.lightOrange),
                setbtn2color("rgb(220,220,220)");
            }
          }}
        >
          {props.name1}
        </Button>
        <Button
          ml={2}
          size="sm"
          bg={btn2color}
          onPress={() => {
            {
              btnChange(props.name2),
                setbtn1color("rgb(220,220,220)"),
                setbtn2color(plate.lightOrange);
            }
          }}
        >
          {props.name2}
        </Button>
      </HStack>
  );
};

export default BtnChange;
