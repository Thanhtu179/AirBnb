import { OPEN_DRAWER, CLOSE_DRAWER, SET_SIDER_BAR } from "../Types/AdminControlType"

export const openDrawer = (title, content) => ({
    type: OPEN_DRAWER,
    title,
    content
});

export const closeDrawer = () => ({
    type: CLOSE_DRAWER,
})

export const setSiderBar = () => ({
    type: SET_SIDER_BAR,
}) 
