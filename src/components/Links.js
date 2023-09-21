import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function Links() {

    const links = {
        "ZHAW": "https://www.zhaw.ch/de/hochschule/",
        "Stundenplan": "https://stundenplan.zhaw.ch/",
        "Intranet": "https://intra.zhaw.ch/",
        "Webmail Office 365": "https://outlook.office365.com/owa",
        "Moodle": "https://moodle.zhaw.ch/",
        "EventoWeb": "https://eventoweb.zhaw.ch/"
    }

    const renderLinks = () => {
        return Object.entries(links).map(([text, url]) => {
                return (
                    <ListItem>
                        <ListItemButton component="a" href={url} target={"_blank"}
                                        rel={"noopener"}>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                )
            }
        )
    }

    return (
        <List>
            {renderLinks()}
        </List>
    );
}