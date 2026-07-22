import styled from "styled-components";

export const Table = styled.div `
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    & table {
        width: 100%;
        border-collapse: collapse;
    }

    & th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #eee;
    }

    & th {
        background-color: #417e00e0;
        color: white;
        font-weight: 500;
    }

    & tr:hover {
        background: #f9f9f9;
    }
`

export const Img = styled.img `
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
`

export const Btn = styled.button `
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    margin-right: 5px;
    margin-bottom: 5px;

    &.btn-add {
        background: #4a90d9;
        color: white;
        margin-bottom: 20px;
    }

    &.btn-edit {
        background: #f09c00fa;
        color: black;
    }

    &.btn-delete {
        background:  #c40000d2;
        color: white;
        padding: 10px 20px;
    }
`