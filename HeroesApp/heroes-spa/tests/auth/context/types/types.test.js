import { types } from "../../../../src/auth/types/types"

describe('Pruebas en Types', () => {
    test('Debe de regresar los types admitidos', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})