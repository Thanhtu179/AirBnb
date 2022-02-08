import { OPEN_DRAWER, CLOSE_DRAWER, SET_SIDER_BAR } from "../Types/AdminControlType"



const initialState = {
    modalDrawer: {
        drawerVisible: false,
        drawerContent: <p>Default</p>,
        drawerTitle: "Test",
    },
    sidebarToggle: false,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case OPEN_DRAWER: {
            state.modalDrawer.drawerTitle = action.title;
            state.modalDrawer.drawerContent = action.content;
            state.modalDrawer.drawerVisible = true;
            return { ...state }
        }

        case CLOSE_DRAWER: {
            state.modalDrawer.drawerVisible = false;
            state.modalDrawer.drawerTitle = "Title Default";
            state.modalDrawer.drawerContent = <p>Default</p>;
            return { ...state }
        }

        case SET_SIDER_BAR: {
            state.sidebarToggle = !state.sidebarToggle;
            return { ...state }
        }

        default:
            return state
    }
}
