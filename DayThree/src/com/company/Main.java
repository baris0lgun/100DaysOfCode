package com.company;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {


//        final byte MONTS_IN_YEAR = 12;
//        final byte PERCENT = 100;

//        Scanner scanner = new Scanner(System.in);
//
//        System.out.print("Principal: ");
//        int Principal = scanner.nextInt();

//        System.out.print("Annual Interest Rate :");
//        Float annualInterest = scanner.nextFloat();
//        Float montlyInterest = annualInterest / PERCENT /MONTS_IN_YEAR;
//
//        System.out.print("Period (Years):" );
//        byte years = scanner.nextByte();
//        int numberOfPayments = years * MONTS_IN_YEAR;
//
//
//
//        Double Mortgage = Principal
//                * (montlyInterest*Math.pow(1+montlyInterest, numberOfPayments))
//                / (Math.pow(1+montlyInterest,numberOfPayments) - 1);
//
//        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(Mortgage);
//        System.out.println("Mortgage: "+ mortgageFormatted);



//        int x = 1;
//        int y = 1;
//
//        System.out.println(x == y);
//        System.out.println(x != y);


//        int tempeture = 22;
//
//        boolean isWarm = tempeture > 20 && tempeture < 30;
//        System.out.println(isWarm);


//        boolean hasHighIncome = true;
//        boolean hasGoodCredit = true;
//        boolean hasCriminalRecord = false;
//        boolean isEligible = (hasHighIncome || hasGoodCredit) && !hasCriminalRecord;
//        System.out.println(isEligible);

//        int temp = 32;
//        if (temp > 30){
//            System.out.println("it's a hot day");
//            System.out.print(" Drink water");
//        }
//        else if (temp > 20)
//            System.out.println("Beautiful day");
//        else
//            System.out.println("Cold day");


//        int income = 120_000;
//        boolean hasHighIncome = (income>100_000);
//        System.out.println(hasHighIncome);


//        int income = 120_000;
//        String className = income > 100_000 ? "First" : "Economy";
//
//        System.out.println(className + " Class");


//        Scanner scanner = new Scanner(System.in);
//        System.out.print("number: ");
//        int number = scanner.nextInt();
//
//        if (number % 5 == 0 && number % 3 == 0)
//            System.out.println("FizzBuzz");
//        else if (number % 5 == 0)
//            System.out.println("Fizz");
//        else if (number % 3 == 0)
//            System.out.println("Buzz");
//        else
//            System.out.println(number);


//        for (int i = 0; i < 5; i++ )
//            System.out.println("hello world");


        Scanner scanner = new Scanner(System.in);
        String input = "";
        while (!input.equals("quit")){
            System.out.print("input:");
            input = scanner.next();
            System.out.println(input);
            scanner.next().toLowerCase();


        }



    }
}
