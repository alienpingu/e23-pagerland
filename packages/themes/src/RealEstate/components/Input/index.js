import { css } from 'styled-components';

import { Wrapper as Icon } from '@pagerland/common/src/components/Icon/styled.components';

import Typography from '../Typography';
import { body, colors, transition } from '../../styles';

export default {
  main: css`
    position: relative;
    display: block;
    width: 100%;
    min-height: 50px;
    padding: 12px 24px;
    font-family: ${body.fontFamily};
    font-size: 18px;
    line-height: 1.6;
    color: ${colors.gray[1]};
    background: none;
    border: none;
    outline: none !important;
    transition: ${transition.all};
    -webkit-appearance: none;

    ::placeholder {
      color: ${colors.gray[2]};
      opacity: 1;
    }

    textarea& {
      min-height: 180px;
    }

    &[type='date']::-webkit-calendar-picker-indicator {
      width: 24px;
      opacity: 0;
    }

    & + ${Icon} {
      margin-left: 0;
    }

    ${Icon} + & {
      margin-left: -24px;
    }
  `,
  Label: {
    main: css`
      ${Typography.variants.label};
      display: block;
      margin-bottom: 8px;
    `,
  },
  Wrapper: {
    main: css`
      & + & {
        margin-top: 16px;
      }
    `,
  },
  ErrorMessage: {
    main: css`
      display: flex;
      align-items: center;
      padding-top: 8px;
      font-family: ${body.fontFamily};
      font-size: 14px;
      color: ${colors.error};
    `,
  },
  InputWrapper: {
    main: css`
      position: relative;
      display: flex;
      align-items: stretch;
      color: ${colors.gray[3]};
      border: 2px solid ${colors.gray[4]};
      transition: ${transition.all};

      ${Icon} {
        align-self: center;
        margin: 0 24px;
        font-size: 24px;
      }

      .date &::after {
        position: absolute;
        top: 16px;
        right: 18px;
        display: block;
        width: 24px;
        height: 24px;
        padding: 0;
        color: rgba(0, 0, 0, 0);
        pointer-events: none;
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE5QzEyLjE5NzggMTkgMTIuMzkxMSAxOC45NDE0IDEyLjU1NTYgMTguODMxNUMxMi43MiAxOC43MjE2IDEyLjg0ODIgMTguNTY1NCAxMi45MjM5IDE4LjM4MjdDMTIuOTk5NiAxOC4yIDEzLjAxOTQgMTcuOTk4OSAxMi45ODA4IDE3LjgwNDlDMTIuOTQyMiAxNy42MTA5IDEyLjg0NyAxNy40MzI3IDEyLjcwNzEgMTcuMjkyOUMxMi41NjczIDE3LjE1MyAxMi4zODkxIDE3LjA1NzggMTIuMTk1MSAxNy4wMTkyQzEyLjAwMTEgMTYuOTgwNiAxMS44IDE3LjAwMDQgMTEuNjE3MyAxNy4wNzYxQzExLjQzNDYgMTcuMTUxOCAxMS4yNzg0IDE3LjI4IDExLjE2ODUgMTcuNDQ0NEMxMS4wNTg2IDE3LjYwODkgMTEgMTcuODAyMiAxMSAxOEMxMSAxOC4yNjUyIDExLjEwNTQgMTguNTE5NiAxMS4yOTI5IDE4LjcwNzFDMTEuNDgwNCAxOC44OTQ2IDExLjczNDggMTkgMTIgMTlaTTE3IDE5QzE3LjE5NzggMTkgMTcuMzkxMSAxOC45NDE0IDE3LjU1NTYgMTguODMxNUMxNy43MiAxOC43MjE2IDE3Ljg0ODIgMTguNTY1NCAxNy45MjM5IDE4LjM4MjdDMTcuOTk5NiAxOC4yIDE4LjAxOTQgMTcuOTk4OSAxNy45ODA4IDE3LjgwNDlDMTcuOTQyMiAxNy42MTA5IDE3Ljg0NyAxNy40MzI3IDE3LjcwNzEgMTcuMjkyOUMxNy41NjczIDE3LjE1MyAxNy4zODkxIDE3LjA1NzggMTcuMTk1MSAxNy4wMTkyQzE3LjAwMTEgMTYuOTgwNiAxNi44IDE3LjAwMDQgMTYuNjE3MyAxNy4wNzYxQzE2LjQzNDYgMTcuMTUxOCAxNi4yNzg0IDE3LjI4IDE2LjE2ODUgMTcuNDQ0NEMxNi4wNTg2IDE3LjYwODkgMTYgMTcuODAyMiAxNiAxOEMxNiAxOC4yNjUyIDE2LjEwNTQgMTguNTE5NiAxNi4yOTI5IDE4LjcwNzFDMTYuNDgwNCAxOC44OTQ2IDE2LjczNDggMTkgMTcgMTlaTTE3IDE1QzE3LjE5NzggMTUgMTcuMzkxMSAxNC45NDE0IDE3LjU1NTYgMTQuODMxNUMxNy43MiAxNC43MjE2IDE3Ljg0ODIgMTQuNTY1NCAxNy45MjM5IDE0LjM4MjdDMTcuOTk5NiAxNC4yIDE4LjAxOTQgMTMuOTk4OSAxNy45ODA4IDEzLjgwNDlDMTcuOTQyMiAxMy42MTA5IDE3Ljg0NyAxMy40MzI3IDE3LjcwNzEgMTMuMjkyOUMxNy41NjczIDEzLjE1MyAxNy4zODkxIDEzLjA1NzggMTcuMTk1MSAxMy4wMTkyQzE3LjAwMTEgMTIuOTgwNiAxNi44IDEzLjAwMDQgMTYuNjE3MyAxMy4wNzYxQzE2LjQzNDYgMTMuMTUxOCAxNi4yNzg0IDEzLjI4IDE2LjE2ODUgMTMuNDQ0NEMxNi4wNTg2IDEzLjYwODkgMTYgMTMuODAyMiAxNiAxNEMxNiAxNC4yNjUyIDE2LjEwNTQgMTQuNTE5NiAxNi4yOTI5IDE0LjcwNzFDMTYuNDgwNCAxNC44OTQ2IDE2LjczNDggMTUgMTcgMTVaTTEyIDE1QzEyLjE5NzggMTUgMTIuMzkxMSAxNC45NDE0IDEyLjU1NTYgMTQuODMxNUMxMi43MiAxNC43MjE2IDEyLjg0ODIgMTQuNTY1NCAxMi45MjM5IDE0LjM4MjdDMTIuOTk5NiAxNC4yIDEzLjAxOTQgMTMuOTk4OSAxMi45ODA4IDEzLjgwNDlDMTIuOTQyMiAxMy42MTA5IDEyLjg0NyAxMy40MzI3IDEyLjcwNzEgMTMuMjkyOUMxMi41NjczIDEzLjE1MyAxMi4zODkxIDEzLjA1NzggMTIuMTk1MSAxMy4wMTkyQzEyLjAwMTEgMTIuOTgwNiAxMS44IDEzLjAwMDQgMTEuNjE3MyAxMy4wNzYxQzExLjQzNDYgMTMuMTUxOCAxMS4yNzg0IDEzLjI4IDExLjE2ODUgMTMuNDQ0NEMxMS4wNTg2IDEzLjYwODkgMTEgMTMuODAyMiAxMSAxNEMxMSAxNC4yNjUyIDExLjEwNTQgMTQuNTE5NiAxMS4yOTI5IDE0LjcwNzFDMTEuNDgwNCAxNC44OTQ2IDExLjczNDggMTUgMTIgMTVaTTE5IDNIMThWMkMxOCAxLjczNDc4IDE3Ljg5NDYgMS40ODA0MyAxNy43MDcxIDEuMjkyODlDMTcuNTE5NiAxLjEwNTM2IDE3LjI2NTIgMSAxNyAxQzE2LjczNDggMSAxNi40ODA0IDEuMTA1MzYgMTYuMjkyOSAxLjI5Mjg5QzE2LjEwNTQgMS40ODA0MyAxNiAxLjczNDc4IDE2IDJWM0g4VjJDOCAxLjczNDc4IDcuODk0NjQgMS40ODA0MyA3LjcwNzExIDEuMjkyODlDNy41MTk1NyAxLjEwNTM2IDcuMjY1MjIgMSA3IDFDNi43MzQ3OCAxIDYuNDgwNDMgMS4xMDUzNiA2LjI5Mjg5IDEuMjkyODlDNi4xMDUzNiAxLjQ4MDQzIDYgMS43MzQ3OCA2IDJWM0g1QzQuMjA0MzUgMyAzLjQ0MTI5IDMuMzE2MDcgMi44Nzg2OCAzLjg3ODY4QzIuMzE2MDcgNC40NDEyOSAyIDUuMjA0MzUgMiA2VjIwQzIgMjAuNzk1NiAyLjMxNjA3IDIxLjU1ODcgMi44Nzg2OCAyMi4xMjEzQzMuNDQxMjkgMjIuNjgzOSA0LjIwNDM1IDIzIDUgMjNIMTlDMTkuNzk1NiAyMyAyMC41NTg3IDIyLjY4MzkgMjEuMTIxMyAyMi4xMjEzQzIxLjY4MzkgMjEuNTU4NyAyMiAyMC43OTU2IDIyIDIwVjZDMjIgNS4yMDQzNSAyMS42ODM5IDQuNDQxMjkgMjEuMTIxMyAzLjg3ODY4QzIwLjU1ODcgMy4zMTYwNyAxOS43OTU2IDMgMTkgM1pNMjAgMjBDMjAgMjAuMjY1MiAxOS44OTQ2IDIwLjUxOTYgMTkuNzA3MSAyMC43MDcxQzE5LjUxOTYgMjAuODk0NiAxOS4yNjUyIDIxIDE5IDIxSDVDNC43MzQ3OCAyMSA0LjQ4MDQzIDIwLjg5NDYgNC4yOTI4OSAyMC43MDcxQzQuMTA1MzYgMjAuNTE5NiA0IDIwLjI2NTIgNCAyMFYxMUgyMFYyMFpNMjAgOUg0VjZDNCA1LjczNDc4IDQuMTA1MzYgNS40ODA0MyA0LjI5Mjg5IDUuMjkyODlDNC40ODA0MyA1LjEwNTM2IDQuNzM0NzggNSA1IDVINlY2QzYgNi4yNjUyMiA2LjEwNTM2IDYuNTE5NTcgNi4yOTI4OSA2LjcwNzExQzYuNDgwNDMgNi44OTQ2NCA2LjczNDc4IDcgNyA3QzcuMjY1MjIgNyA3LjUxOTU3IDYuODk0NjQgNy43MDcxMSA2LjcwNzExQzcuODk0NjQgNi41MTk1NyA4IDYuMjY1MjIgOCA2VjVIMTZWNkMxNiA2LjI2NTIyIDE2LjEwNTQgNi41MTk1NyAxNi4yOTI5IDYuNzA3MTFDMTYuNDgwNCA2Ljg5NDY0IDE2LjczNDggNyAxNyA3QzE3LjI2NTIgNyAxNy41MTk2IDYuODk0NjQgMTcuNzA3MSA2LjcwNzExQzE3Ljg5NDYgNi41MTk1NyAxOCA2LjI2NTIyIDE4IDZWNUgxOUMxOS4yNjUyIDUgMTkuNTE5NiA1LjEwNTM2IDE5LjcwNzEgNS4yOTI4OUMxOS44OTQ2IDUuNDgwNDMgMjAgNS43MzQ3OCAyMCA2VjlaTTcgMTVDNy4xOTc3OCAxNSA3LjM5MTEyIDE0Ljk0MTQgNy41NTU1NyAxNC44MzE1QzcuNzIwMDIgMTQuNzIxNiA3Ljg0ODE5IDE0LjU2NTQgNy45MjM4OCAxNC4zODI3QzcuOTk5NTcgMTQuMiA4LjAxOTM3IDEzLjk5ODkgNy45ODA3OSAxMy44MDQ5QzcuOTQyMiAxMy42MTA5IDcuODQ2OTYgMTMuNDMyNyA3LjcwNzExIDEzLjI5MjlDNy41NjcyNSAxMy4xNTMgNy4zODkwNyAxMy4wNTc4IDcuMTk1MDkgMTMuMDE5MkM3LjAwMTExIDEyLjk4MDYgNi44MDAwNCAxMy4wMDA0IDYuNjE3MzIgMTMuMDc2MUM2LjQzNDU5IDEzLjE1MTggNi4yNzg0MSAxMy4yOCA2LjE2ODUzIDEzLjQ0NDRDNi4wNTg2NSAxMy42MDg5IDYgMTMuODAyMiA2IDE0QzYgMTQuMjY1MiA2LjEwNTM2IDE0LjUxOTYgNi4yOTI4OSAxNC43MDcxQzYuNDgwNDMgMTQuODk0NiA2LjczNDc4IDE1IDcgMTVaTTcgMTlDNy4xOTc3OCAxOSA3LjM5MTEyIDE4Ljk0MTQgNy41NTU1NyAxOC44MzE1QzcuNzIwMDIgMTguNzIxNiA3Ljg0ODE5IDE4LjU2NTQgNy45MjM4OCAxOC4zODI3QzcuOTk5NTcgMTguMiA4LjAxOTM3IDE3Ljk5ODkgNy45ODA3OSAxNy44MDQ5QzcuOTQyMiAxNy42MTA5IDcuODQ2OTYgMTcuNDMyNyA3LjcwNzExIDE3LjI5MjlDNy41NjcyNSAxNy4xNTMgNy4zODkwNyAxNy4wNTc4IDcuMTk1MDkgMTcuMDE5MkM3LjAwMTExIDE2Ljk4MDYgNi44MDAwNCAxNy4wMDA0IDYuNjE3MzIgMTcuMDc2MUM2LjQzNDU5IDE3LjE1MTggNi4yNzg0MSAxNy4yOCA2LjE2ODUzIDE3LjQ0NDRDNi4wNTg2NSAxNy42MDg5IDYgMTcuODAyMiA2IDE4QzYgMTguMjY1MiA2LjEwNTM2IDE4LjUxOTYgNi4yOTI4OSAxOC43MDcxQzYuNDgwNDMgMTguODk0NiA2LjczNDc4IDE5IDcgMTlaIiBmaWxsPSIjNEYzRjQ0Ii8+Cjwvc3ZnPgo=');
        opacity: 1;
      }

      .focused & {
        border-color: ${colors.gray[2]};
      }

      .error & {
        border-color: ${colors.error};
      }

      .success & {
        border-color: ${colors.success};
      }
    `,
  },
};
