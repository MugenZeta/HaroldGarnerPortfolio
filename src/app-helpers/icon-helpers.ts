import {ICONS} from "./icon-list";


//helpers to streamline the icon data retrieval process
export const getIconData = (name :string) => {
    function searchByName(name: string)
    {
        for (let index = 0; index < ICONS.length; index++) {
            if (name === ICONS[index].iconName) {
                let iSource = ICONS[index].iconSource;
                let iUrl = ICONS[index].iconUrl;
                let altText =ICONS[index].iconAltText

            } else if (index === ICONS.length && name != ICONS[index].iconName) {
                getIconData("Folder");
            }
        }
    }
    return searchByName(name);
};
