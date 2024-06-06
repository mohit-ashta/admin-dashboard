const { configureStore } = require("@reduxjs/toolkit");
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (mid: any) =>
    mid({
      serializableCheck: false,
    }).concat(rootReducer.middleware),
});
export { store };