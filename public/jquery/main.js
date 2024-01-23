$(document).ready(function() {
    // Your jQuery code here
    $("#addRow").click(function (event) {
        event.preventDefault();
        var row = `<tr>
            <td rowspan="2" contenteditable='true'></td>
            <td>Reps</td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
        </tr>
        <tr>
            <td>Weight</td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
            <td><input type="number" class="form-control form-control-sm" /></td>
        </tr>`;
        $("#exerciselog").append(row);
    });
    $("#submit").click(function (event) {
        validate();
        event.preventDefault();

        var table = document.getElementById("exerciselog");
        var exercises = [];
        var exercise = {};
        console.log(table.tBodies[0])
        var totalRows = table.tBodies[0].rows.length;
        //iterate through each row in the table
        for (var i = 0, row; i < totalRows; i = i + 2) {
            console.log('loopiong through rows' + i, totalRows)
            row = table.tBodies[0].rows[i]
            var totalCells = row.cells.length;
            //iterate through each cell in the row
            for (var j = 0, cell; j < totalCells; j++) {
                cell = row.cells[j]
                if (j == 0) {
                    exercise.name = cell.innerText;
                    continue;
                }

                if (j == 1) {
                    continue;
                }
                var repRow = row;
                var weightRow = table.tBodies[0].rows[i + 1];
                var repCell = repRow.cells[j];
                var weightCell = weightRow.cells[j - 1];
                var repInput = repCell.getElementsByTagName('input')[0];
                var weightInput = weightCell.getElementsByTagName('input')[0];
                if (repInput && repInput.value) {
                    if (j === 2) {
                        exercise.reps = [];
                        exercise.weights = [];
                        exercise.reps.push(repInput.value);
                        exercise.weights.push(weightInput.value);
                    } else {
                        exercise.reps.push(repInput.value);
                        exercise.weights.push(weightInput.value);
                    }
                }

            }
            exercises.push(exercise);
            exercise = {};
        }
        console.log(JSON.stringify(exercises));


    });

    $("#workout-nav").click(function (event) {
        event.preventDefault();
        $("#workout-form").removeClass("d-none")
        $("#lifestyle-form").addClass("d-none");
        $("#measurements-form").addClass("d-none");
        $("#app-tabs .active").removeClass("active");
        $("#workout-nav").addClass("active");

    });
    $("#lifestyle-nav").click(function (event) {
        event.preventDefault();
        $("#workout-form").addClass("d-none");
        $("#lifestyle-form").removeClass("d-none");
        $("#measurements-form").addClass("d-none");
        $("#app-tabs .active").removeClass("active");
        $("#lifestyle-nav").addClass("active");
    });
    $("#measurements-nav").click(function (event) {
        event.preventDefault();
        $("#workout-form").addClass("d-none");
        $("#lifestyle-form").addClass("d-none");
        $("#measurements-form").removeClass("d-none");
        $("#app-tabs .active").removeClass("active");
        $("#measurements-nav").addClass("active");
    });
});
