import styled from "styled-components";
import {IconButton} from "@material-ui/core";

export const Wrapper = styled.header`
  position: sticky;
  background: #c6c9c4;
  padding: 20px 0;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  margin-bottom: 20px;
  text-align: right;
`

export const StyledBtn = styled(IconButton)`
  padding-right: 100px;
`