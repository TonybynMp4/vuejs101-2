interface FormComponent {
    formLegend: string;
    fields: FieldComponent[];
    actions: ButtonComponent[];
}

type FieldComponent = {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
};

type ButtonComponent = {
    id: string;
    label: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    style?: string;
};

export type {
    FormComponent,
    FieldComponent,
    ButtonComponent
}