import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../../src/auth";
import { PrivateRoute } from "../../../../src/router/PrivateRoute";

describe("Pruebas en PrivateRoute", () => {
  test("Debe de mostrar el children si está autenticado", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: "Martin",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(localStorage.setItem).toHaveBeenCalled()
  });
});
