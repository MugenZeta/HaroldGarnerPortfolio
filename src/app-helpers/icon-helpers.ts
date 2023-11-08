import {ICONS} from "./icon-list";


//helpers to streamline the icon data retrieval process
export const getIconData = (name :string) => {
    function searchByName(name: string)
    {
        for (let index = 0; index < ICONS.length; index++) {
            if (name === ICONS[index].iconName) {
                loadSearchedDataSource(ICONS[index].iconSource);
                loadSearchedDataURL(ICONS[index].iconUrl);
                loadSearchedDataAltText(ICONS[index].iconAltText)

            } else if (index === ICONS.length && name != ICONS[index].iconName) {
                getIconData("Folder");
            }
        }
    }
    return searchByName(name);
    function loadSearchedDataSource(iSource : string){ return iSource;}
    function loadSearchedDataURL(iUrl : string){ return iUrl;}
    function loadSearchedDataAltText(altText : string){ return altText;}
};
