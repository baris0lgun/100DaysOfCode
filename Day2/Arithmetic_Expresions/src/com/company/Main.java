package com.company;

import java.text.NumberFormat;
import java.time.Period;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

//        double result = (double)10 /(double) 3;

//        System.out.println(result);

//        int x = 1;
//
//        int y = ++x;

//        System.out.println(x);
//        System.out.println(y);

//        int x = 1;
//        x += 2;
//        System.out.println(x);


//        int x = (10+3) * 2;
//        System.out.println(x);

//        implicit casting

//        short x = 1;
//        int y = x + 2;
//
//        System.out.println(y);


//        double x = 1.1;
//        int y = (int)x + 2; // 2.0
//        System.out.println(y);


//        String x = "1.1";
//        double y = Double.parseDouble(x) + 2;
//        System.out.println(y);


//        int result = (int) (Math.random()*100);
//        System.out.println(result);


//        NumberFormat currency = NumberFormat.getPercentInstance();
//        String percent = percent.format(0.1);
//        System.out.println(percent);


//        String percent = NumberFormat.getPercentInstance().format(0.1);
//        System.out.println(percent);


//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Name:");
//        String name = scanner.nextLine().trim();
//        System.out.println("You are " + name);


        Scanner scanner = new Scanner(System.in);

        System.out.print("Principal $:");
        Long P = scanner.nextLong();
        System.out.println(P);

        System.out.print("Annual interest rate %:");
        Double r = scanner.nextDouble();
        r =r/100 /12;
        System.out.println(r);

        System.out.print("Period (years)");
        Double Period = scanner.nextDouble();
        Double N = Period * 12;
        System.out.println(N);



    }

}
