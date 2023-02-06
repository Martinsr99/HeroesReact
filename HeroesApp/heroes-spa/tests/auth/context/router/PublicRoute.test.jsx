import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../../src/auth";
import { PublicRoute } from "../../../../src/router/PublicRoute";

describe("Pruebas en PublicRoute", () => {
  test("Debe de mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute />
      </AuthContext.Provider>
    );
  });

  test("Debe de navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Martin",
        id: 123,
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Marvel')).toBeTruthy()
  });
});
