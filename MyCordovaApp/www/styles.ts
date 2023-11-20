import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  hamburgerMenu: {
    marginRight: "25%",
  },
  headerText: {
    color: "#340068",
    fontFamily: "Corbel",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  heading: {
    color: "#340068",
    fontFamily: "Corbel",
    fontSize: 20,
    fontWeight: "700",
  },
  form: {
    flexDirection: "column",
  },
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  quantityLabelWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelInput: {
    marginLeft: 10,
    height: 34,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(23, 23, 23, 0.8)",
    fontFamily: "Corbel",
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(23, 23, 23, 0.8)",
  },
  quantityButtonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  fieldInput: {
    height: 34,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    padding: 5,
    fontFamily: "Corbel",
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(23, 23, 23, 0.8)",
  },
  quantityInput: {
    width: "25%",
    borderBottomWidth: 0,
    textAlign: "center",
  },
  selectInput: {
    appearance: "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "auto 1em",
    backgroundImage:
      'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'2\' viewBox=\'0 0 8 10\' fill=\'none\'><path d=\'M0.306992 0.305919C0.503619 0.110039 0.770267 -3.36694e-08 1.0483 -4.58225e-08C1.32633 -5.79756e-08 1.59297 0.110039 1.7896 0.305919L6.97978 5.47795L12.17 0.305919C12.3677 0.11559 12.6326 0.0102748 12.9075 0.0126552C13.1824 0.015036 13.4454 0.124922 13.6398 0.318646C13.8342 0.51237 13.9445 0.774433 13.9469 1.04839C13.9493 1.32235 13.8436 1.58628 13.6526 1.78334L7.72109 7.69408C7.52446 7.88996 7.25781 8 6.97978 8C6.70175 8 6.4351 7.88996 6.23848 7.69408L0.306993 1.78334C0.110425 1.5874 -2.91918e-07 1.32169 -3.04029e-07 1.04463C-3.16139e-07 0.767573 0.110425 0.501858 0.306992 0.305919Z" fill="purple"/></svg>")',
    padding: "0.1em 1.5em 0.1em 0.4em",
  },
  addMoreButtonWrapper: {
    marginTop: "40%",
    marginBottom: 0,
  },
  addMoreButton: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonLabel: {
    color: "rgba(23, 23, 23, 0.40)",
    fontFamily: "Corbel",
    fontSize: 16,
    fontWeight: "400",
  },
  sellButton: {
    flexDirection: "row",
    width: 320,
    paddingVertical: 8,
    paddingHorizontal: 116,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#340068",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Corbel",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default styles;
