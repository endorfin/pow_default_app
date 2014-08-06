$(function() {
    var projectList = new List('projects', {
        valueNames: ['name'],
        page: 10,
        plugins: [ ListFuzzySearch(), ListPagination({}) ]
    });
});