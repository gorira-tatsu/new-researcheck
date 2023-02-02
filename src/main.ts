function search() { //search event
    insert_search_box(get_search_word(), get_google_search_box_address());
    get_search_button().click()

}

function get_search_word() {
    const search_word: string = get_search_box_address().value
    return search_word;
}

function insert_search_box(search_word: string, address: HTMLInputElement) {
    address.value = search_word;
}

function get_google_search_box_address() {
    const address: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName('gsc-input')[2];
    return address;
}

function get_search_box_address() {
    const address: HTMLInputElement = <HTMLInputElement>document.getElementById('q');
    return address
}

function get_search_button() {
    const address: HTMLElement = <HTMLElement>document.querySelector('#___gcse_0 > div > div > form > table > tbody > tr > td.gsc-search-button > button');
    return address;
}
