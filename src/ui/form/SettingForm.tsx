import {useFormik} from "formik";
import React from "react";
import s from './SettingForm.module.scss'

export const SettingForm: React.FC<FormPropsType> = React.memo(({changeCallback, values}) => {

    let color1 = ''
    let color2 = ''
    if (values) {
        color1 = values.color1
        color2 = values.color2
    }

    const formik = useFormik({
        initialValues: {
            color1: color1,
            color2: color2,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.color1) {
                errors.color1 = 'Required';
            } else if (!/(^#[A-F0-9]{3}$)|(^#[A-F0-9]{6}$)/i.test(values.color1)) {
                errors.color1 = 'Invalid color';
            }
            if (!values.color2) {
                errors.color2 = 'Required';
            } else if (!/(^#[A-F0-9]{3}$)|(^#[A-F0-9]{6}$)/i.test(values.color2)) {
                errors.color2 = 'Invalid color';
            }

            return errors;
        },

        onSubmit: (values: FormValuesType) => {
            changeCallback(values)

            formik.resetForm()
        },
    });

    return (
        <form className={s.formBox} onSubmit={formik.handleSubmit}>
            <label htmlFor="color1" className={s.labelTitle}>enter your color for begin gradient</label>
            <input
                placeholder={values?.color1}
                {...formik.getFieldProps('color1')}  />
            <div style={{'color': 'red', 'height': '10px'}}>
                {formik.touched.color1 && formik.errors.color1 && formik.errors.color1}
            </div>
            <label htmlFor="color1" className={s.labelTitle}>enter your color for end gradient</label>
            <input
                placeholder={values?.color2}
                {...formik.getFieldProps('color2')}  />
            <div style={{'color': 'red', 'height': '10px'}}>
                {formik.touched.color2 && formik.errors.color2 && formik.errors.color2}
            </div>


            <button type="submit">save gradient</button>
        </form>
    )
})


type FormPropsType = {
    values?: { color1: string, color2: string }
    changeCallback: (values: FormValuesType) => void
}

type FormikErrorType = {
    color1?: string
    color2?: string
}
export type FormValuesType = {
    color1: string
    color2: string
}

