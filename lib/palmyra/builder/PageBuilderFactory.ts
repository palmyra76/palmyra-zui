import { PageBuilder } from "./PageBuilder";

const gridBuilder = (): PageBuilder => {
    return new PageBuilder('grid');
}

const editFormBuilder = (): PageBuilder => {
    return new PageBuilder('formEdit');
}

const viewFormBuilder = (): PageBuilder => {
    return new PageBuilder('formView');
}

const newFormBuilder = (): PageBuilder => {
    return new PageBuilder('formEdit');
}

const dashboardBuilder = (): PageBuilder => {
    return new PageBuilder('dashboard')
}

export { gridBuilder, editFormBuilder, viewFormBuilder, dashboardBuilder, newFormBuilder };
