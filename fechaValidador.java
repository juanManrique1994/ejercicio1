/**
 * 
 */
/**
 * 
 */


import java.util.Scanner;

public class fechaValidador {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese una fecha (dd/mm/yyyy): ");
        String input = scanner.nextLine();

        if (validarFormato(input)) {
            String[] partes = input.split("/");
            int dia = Integer.parseInt(partes[0]);
            int mes = Integer.parseInt(partes[1]);
            int anio = Integer.parseInt(partes[2]);

            if (validarAnio(anio) && validarMes(mes) && validarDia(dia, mes, anio)) {
                System.out.println("La fecha es correcta.");
            } else {
                System.out.println("La fecha es incorrecta.");
            }
        } else {
            System.out.println("Formato de fecha incorrecto. Use dd/mm/yyyy.");
        }

        scanner.close();
    }

    public static boolean validarFormato(String fecha) {
        return fecha.matches("\\d{2}/\\d{2}/\\d{4}");
    }

    public static boolean validarAnio(int anio) {
        return anio >= 1900 && anio <= 2099;
    }

    public static boolean validarMes(int mes) {
        return mes >= 1 && mes <= 12;
    }

    public static boolean validarDia(int dia, int mes, int anio) {
        if (mes == 2) {
            if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
                return dia >= 1 && dia <= 29;
            } else {
                return dia >= 1 && dia <= 28;
            }
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            return dia >= 1 && dia <= 30;
        } else {
            return dia >= 1 && dia <= 31;
        }
    }
}
