(function ($) {
    $(document).ready(function () {

        $('#irrigar').click(function(event){
            event.preventDefault();

            var horta_x = $('#horta_x').val();
            var horta_y = $('#horta_y').val();
            var robo_x = $('#robo_x').val();
            var robo_y = $('#robo_y').val();
            var robo_dir = $('#robo_dir').val();
            var canteiro_x = $('#canteiro_x').val();
            var canteiro_y = $('#canteiro_y').val();

            var movimentos = '';
            
            switch (robo_dir) {
                case 'N':
                    if (robo_x < canteiro_x) {
                        movimentos = movimentos + "D";
                        robo_dir = 'L';
                    }
                    else {
                        movimentos = movimentos + "E";
                        robo_dir = 'O';
                    }
                    break;
                case 'S':
                    if (robo_x < canteiro_x) {
                        movimentos = movimentos + "E";
                        robo_dir = 'L';
                    }
                    else {
                        movimentos = movimentos + "D";
                        robo_dir = 'O';
                    }
                    break;
                case 'L':
                    if (robo_x > canteiro_x) {
                        movimentos = movimentos + "D" + "D";
                        robo_dir = 'O';
                    }
                    break;
                case 'O':
                    if (robo_x < canteiro_x) {
                        movimentos = movimentos + "D" + "D";
                        robo_dir = 'L';
                    }
                    break;
            }

            switch (robo_dir) {
                case 'L':
                    while(robo_x != canteiro_x) {
                        movimentos = movimentos + "M";
                        robo_x++;
                    }
                    if (robo_y < canteiro_y) {
                        movimentos = movimentos + "E";
                        robo_dir = 'N';
                    }
                    else {
                        movimentos = movimentos + "D";
                        robo_dir = 'S';
                    }
                    break;
                case 'O':
                    while(robo_x != canteiro_x) {
                        movimentos = movimentos + "M";
                        robo_x--;
                    }
                    if (robo_y < canteiro_y) {
                        movimentos = movimentos + "D";
                        robo_dir = 'N';
                    }
                    else {
                        movimentos = movimentos + "E";
                        robo_dir = 'S';
                    }
                    break;
            }

            switch (robo_dir) {
                case 'N':
                    while(robo_y != canteiro_y) {
                        movimentos = movimentos + "M";
                        robo_y++;
                    }
                    movimentos = movimentos + "I";
                    break;
                case 'S':
                    while(robo_y != canteiro_y) {
                        movimentos = movimentos + "M";
                        robo_y--;
                    }
                    movimentos = movimentos + "I";
                    break;
            }

            $('#resultados').val(movimentos);
            console.log(movimentos);
        });
    });
}(jQuery));