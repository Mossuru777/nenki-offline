import * as React from "react";
import {useLiveQuery} from "dexie-react-hooks";
import DB from "../src/db/DB";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";

// @ts-ignore
import koyomi from "koyomi";

export default function NenkiTable() {
  // personsが変更されたときにコンポーネントは自動的に再レンダリングされます
  const persons = useLiveQuery(() => DB.instance.getAllPersons());

  const table_body = (() => {
    if (persons) {
      if (persons.length > 0) {
        // データが存在する時
        return persons.map(p =>
            <TableRow
              key={p.db_id}
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {`${p.name}${p.title}`}
              </TableCell>
              <TableCell align="right">
                <Tooltip title={koyomi.format(p.death_date.format("YYYY-M-D"), "GGN年M月D日>>元年")}>
                  <span>{p.death_date.format("YYYY/M/D")}</span>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                {p.gyounen !== null
                  ? p.kyounen !== null
                    ?
                    <Tooltip title={`享年 (数え歳): ${p.kyounen}`}>
                      <span>{p.gyounen}</span>
                    </Tooltip>
                    : p.gyounen
                  : "(不明)"
                }
              </TableCell>
              <TableCell align="right">{
                p.birth_date !== null
                  ? (p.is_birth_date_accurate
                      ? <Tooltip title={koyomi.format(p.birth_date.format("YYYY-M-D"), "GGN年M月D日>>元年")}>
                        <span>{p.birth_date.format("YYYY/M/D")}</span>
                      </Tooltip>
                      : <Tooltip title={`${p.birth_date.format("YYYY/M/D")} (${koyomi.format(p.birth_date.format("YYYY-M-D"), "GGN年M月D日>>元年")}) 頃`}>
                        <span>(不正確)</span>
                      </Tooltip>
                  )
                  : "(不明)"
              }</TableCell>
            </TableRow>
          );
      } else {
        // データが存在しない時
        return (
          <TableRow>
            <TableCell colSpan={4}>
              データがありません
            </TableCell>
          </TableRow>);
      }
    } else {
      // 読み込み中
      return (
        <TableRow>
          <TableCell colSpan={4}><HourglassEmptyRoundedIcon/>読込中</TableCell>
        </TableRow>
      );
    }
  })();

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell align="right">命日</TableCell>
            <TableCell align="right">行年 (満年齢)</TableCell>
            <TableCell align="right">生年月日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{table_body}</TableBody>
      </Table>
    </TableContainer>
  );
};
