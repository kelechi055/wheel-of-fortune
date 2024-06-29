import java.util.Scanner;
import java.util.Random;
public class Main
{
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
	    Random random = new Random();
	    
	    String movieName = "game of thrones";
	    int balance = 0;
	    String player;
	    
		System.out.println("Welcome to the Wheel of Fortune.");
		System.out.println("");
		System.out.println("Available Letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		System.out.println("");
		System.out.println("Here is the puzzle (It is a Movie.)");
		System.out.println("");
		System.out.println("---- -- -------");
		
		while(true){
    		System.out.println("Player 1, would you like to Spin(S) or Guess(G) the puzzle?");
    		String p1Choice = scanner.nextLine();
    		
    		int random1 = random.nextInt(10) + 1;
    		if(p1Choice.equals("S") || p1Choice.equals("s")){
    		    if(random1 == 1){
    		      System.out.println("Your spin landed on number 1, congrats. you won $100!");
    		      balance += 100;
    		      System.out.println("Your balance is now " + "$" + balance);
    		      
    		    }
    		    else if(random1 == 2){
    		        System.out.println("Your spin landed on number 2, congrats. you won $300!");
    		      balance += 300;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 3){
    		        System.out.println("Your spin landed on number 3, congrats. you won $500!");
    		      balance += 500;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 4){
    		        System.out.println("Your spin landed on number 4, congrats. you won $700!");
    		      balance += 700;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 5){
    		        System.out.println("Your spin landed on number 5, congrats. you won $900!");
    		      balance += 900;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 6){
    		        System.out.println("Your spin landed on number 6, congrats. you won $2000!");
    		      balance += 2000;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 7){
    		        System.out.println("Your spin landed on number 7, congrats. you won $3000!");
    		      balance += 3000;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 8){
    		        System.out.println("Your spin landed on number 8, congrats. you won $5000!");
    		      balance += 5000;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 9){
    		        System.out.println("Your spin landed on number 9, congrats. you lost $1000!");
    		      balance -= 1000;
    		      System.out.println("Your balance is now " + "$" + balance);
    		    }
    		    else if(random1 == 10){
    		        System.out.println("Your spin landed on number 10. Your balance stays at 0.");
    		    }
    		}
    		       
    	    else if(p1Choice.equals("G") || p1Choice.equals("g")){
    	        System.out.println("You decided to guess. What is you guess? You can guess the whole thing or a letter at a time. ");
    	        
    	        //String[] puzzlesolved = ["g","a","m","e","o","f","t","h","r","o","n","e","s"] 
    	        
    	        String guess1 = scanner.nextLine();
    	        guess1 = guess1.toLowerCase();
    	        
    	        if(guess1.equals("game of thrones")){
    	            balance += 1000000000;
    	            System.out.println("THAT IS CORRECT! GREAT JOB. You've just won $1,000,000! Your balance is now " + balance + "!");
    	            break;
    	        }
    	        else if(guess1.equals("g")){
    	            //String puzzlesofar = (guess1;
    	            System.out.println("Correct. G is a letter in this movie. The movie is G_ _ _ _  _ _  _ _ _ _ _ _ _");
    	        }
    	        else if(guess1.equals("a")){
    	            System.out.println("Correct. A is a letter in this movie. The movie is _ A _ _ _  _ _  _ _ _ _ _ _ _");
    	        }
    	        else if(guess1.equals("m")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ M _  _ _  _ _ _ _ _ _ _");
    	        }
    	        else if(guess1.equals("e")){
    	            System.out.println("Correct. E is a letter in this movie. The movie is _ _ _ E  _ _  _ _ _ _ _ E _");
    	        }
    	        else if(guess1.equals("o")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  O _  _ _ _ O _ _ _");
    	        }
    	        else if(guess1.equals("f")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ F  _ _ _ _ _ _ _");
    	        }
    	        else if(guess1.equals("t")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ _  T _ _ _ _ _ _");
    	        }
    	        else if(guess1.equals("h")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ _  _ H _ _ _ _ _");
    	        }
    	        else if(guess1.equals("r")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ _  _ _ R _ _ _ _");
    	        }
    	        else if(guess1.equals("n")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ _  _ _ _ _ N _ _");
    	        else if(guess1.equals("r")){
    	            System.out.println("Correct. M is a letter in this movie. The movie is _ _ _ _  _ _  _ _ _ _ _ _ S");
    	        }
    	        }
    	        else{
    	           System.out.println("That is incorrect.");
    	        } 
    		}
    	else{
    	    System.out.println("Please try again. Wrong entry.");
    	}
		}
	}
}
