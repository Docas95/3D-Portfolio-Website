import {renderGameboy} from './gameboy.js';
import {renderHeader} from './header.js';
import {renderIcons} from './icons.js';
import { renderProjects } from './projects.js';
import { renderExperience } from './experience.js';
import { renderEducation } from './education.js';

function main(){
    renderHeader();
    renderGameboy();
    renderIcons();
    renderProjects();
    renderExperience();
    renderEducation();
}

main();

