import { Container } from './index';

export default {
    title : 'Container',
    component : Container,
    args : {
        children : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor lobortis pretium. Phasellus et aliquet lectus. Aenean sodales imperdiet orci. Quisque mattis justo et risus pulvinar efficitur. Integer pulvinar, eros ac pellentesque tempus, mi ipsum volutpat lacus, id consequat elit leo nec erat. Duis viverra erat nec nibh placerat accumsan. Sed sed metus imperdiet tellus blandit luctus id at risus. Nullam nec vulputate nisl, ornare tempus nulla. Mauris fringilla ligula vel urna pharetra finibus."
    }

}

export const Template = (args) => <Container {...args}/> 