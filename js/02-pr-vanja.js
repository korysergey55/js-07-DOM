'use strict';
​
class Palette {
    #colors = [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255]
    ];
​
    #baseCSS = `padding:10px 15px; font-size: 15px; `;
​
    printAllColors() {
        const styles = this.#colors.map((color, index) => `${this.#baseCSS} color: rgb(${this.invertColorById(index + 1, false)}); background-color: rgb(${color})`);
​
        console.log('%c' + Object.keys(this.#colors).map(i => +i + 1).join('%c'), ...styles);
    }
​
    addColor(...color) {
        color = color.slice(0, 3);
        if (color.length === 3 && color.every(c => !isNaN(c) && c >= 0 && c <= 255))
            this.#colors.push(color);
    }
​
    margeColor(...arrIdColor) {
        const color = arrIdColor
            .map(id => this.#colors[id - 1])
            .reduce((acc, c) => {
                acc[0] += c[0];
                acc[1] += c[1];
                acc[2] += c[2];
​
                return acc;
            }, [0, 0, 0])
            .map(c => parseInt(c / arrIdColor.length));
​
        this.addColor(...color);
    }
​
    showColorById(id) {
        console.log(`%c${id}`, `${this.#baseCSS} color: rgb(${this.invertColorById(id, false)}); background-color: rgb(${this.#colors[id - 1]})`);
    }
​
    invertColorById(id, isAdd = true) {
        const color = this.#colors[id - 1];
​
        const colorRes = color.map(item => 255 - item);
        if (isAdd) this.addColor(...colorRes);
​
        return colorRes;
    }
​
    getIndexByShade(shade) {
        let index;
        switch (shade) {
            case 'r': index = 0; break;
            case 'g': index = 1; break;
            case 'b': index = 2; break;
        }
​
        return index;
    }
​
    sort(shade, direction = 1) {
        let index = this.getIndexByShade(shade);
​
        this.#colors.sort((a, b) => direction > 0 ? b[index] - a[index] : a[index] - b[index]);
    }
​
    filter(shade) {
        let index = this.getIndexByShade(shade);
​
        this.#colors = this.#colors.filter(color => {
​
            let sumColor = color.reduce((acc, item, ind) => {
                if (ind === index) return acc;
                return acc + item;
            }, 0);
​
            return color[index] >= sumColor;
        });
    }
}
​
const palette = new Palette();
​
palette.addColor(0, 0, 0);
palette.invertColorById(4);
palette.margeColor(1, 2);
palette.margeColor(4, 2);
palette.margeColor(5, 1);
​
palette.invertColorById(6);
​
palette.sort('r', -1);
palette.filter('r');
palette.printAllColors();
​