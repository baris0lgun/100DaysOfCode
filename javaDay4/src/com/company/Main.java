package com.company;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

//        String[] fruits = {"Apple", "Mango", "Orange"};
//
//
//        for (String fruit : fruits)
//            System.out.println(fruit);


        final byte MONTS_IN_YEAR = 12;
        final byte PERCENT = 100;

        int principal = 0;
        float montlyInterest;
        int numberOfPayments;
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Principal :");
            principal = scanner.nextInt();
            if (principal >= 1000 && principal <= 1_000_000)
                break;
            System.out.println("Enter a value between a 1000 and 1_000_000");
        }
        while (true){
            System.out.print("Annual interest rate :");
            float annualInterest = scanner.nextFloat();
            if (annualInterest >= 1 && annualInterest <= 30) {
                montlyInterest = annualInterest / PERCENT / MONTS_IN_YEAR;
                break;
            }
            System.out.println("enter a value 1 and 30");
        }

        while (true){
            System.out.print("Period (Years)");
            byte years = scanner.nextByte();
            if (years >= 1 && years <= 30){
                numberOfPayments = years * MONTS_IN_YEAR;
                break;
            }
            System.out.println("Enter a value between 1 and 30");

        }
        double mortgage = principal
                *(montlyInterest * Math.pow(1 + montlyInterest, numberOfPayments)
                / (Math.pow(1 + montlyInterest, numberOfPayments) - 1));

        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("Mortgage :" + mortgageFormatted);










    }
}
