var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-trigonometric-ints",
  "level": "1",
  "url": "sec-trigonometric-ints.html",
  "type": "Section",
  "number": "1.1",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals     How can the use of trigonometric identities expand the kinds of functions we can integrate?    How do we recognize which trigonometric identities to use in different integration problems?    How can we integrate functions which don't appear to involve trigonometry by making use of a trigonometric substitution?      We have learned how to use the integration techniques of substitution and integration-by-parts to build upon basic antiderivatives and greatly increase the kinds of functions we can integrate. For example, we know that , and we also can calculate that , using substitution, since we can let so that , which transforms the integral into .  But what if we wanted to integrate or or ?   Integrals Involving Sine and Cosine  Substitution, with an Additional Step  Evaluate    Answer: We try finding a function-derivative pair, but things don't look good, since if then , not . Similarly, if then , not . Trying combinations of and gets messy quickly, since we'd need to use product rule to calculate the derivative, and the integrand is not a sum of terms.  However, we do know something about how and are related to each other. Specifically, the Fundamental Trigonometric Identity says that What if we tried a substitution, and then if we still had either or in our integral, we used the Fundamental Trigonometric Identity to rewrite it?  Let's try , so that . Then .  Note that this was mostly using our familiar technique of substitution, once we recognized when we needed to use a trigonometric identity to rewrite something we had remaining in our integral.   This same strategy can be used whenever powers of sine and cosine (with the same argument) are multiplied together and one of the exponents is an odd, positive integer: one power can be factored out to be the , an odd minus 1 is now even, and so the remaining powers can be turned into an expression of using the Fundamental Trigonometric Identity.   Sine and Cosine, at least one of them odd powered  Suppose you have an integral of the form where either or (or both) is an odd, positive integer. Without loss of generality, let's say , the exponent of cosine, is odd and positive.   Factor out one copy of the trig function with the odd power (in this case ) to serve as the .    Rewrite the remaining powers of (which originally had an odd exponent and will now have an even exponent) in terms of using the Fundamental Trigonometric Identity .    Set equal to (because originally had an odd exponent.)      What if we have an integral involving a product of sines and cosines but neither of the functions has an odd, positive integer exponent? We have another method that can be used in the case that both sine and cosine have even, nonnegative integer exponents.  Sine and Cosine with Even Exponents  Evaluate    Answer: If we rewrote in terms of using the Fundamental Trigonometric identity, then we wouldn't have any copy of leftover to serve as the if we made a substitution.  However, there are two more trigonometric identities we can make use of, called the Half-angle identities    Then .  The Half-angle identity helped because it brought the exponent down by 1, and we know how to calculate antiderivatives for both and .    Sine and Cosine, both of them even powered  Suppose you have an integral of the form where both and are an even, nonnegative integers (one of the exponents could be ).   Use the Half-angle identities to reduce the degree of sine and cosine (this will also double whatever the argument originally was).    Multiply out the result and apply the Half-angle identities again, as many times as necessary.        More substitution with trig identities  The main principle behind is that we are using substitution to integrate, and the Fundamental Trigonometric Identity to rewrite what remains in terms of the function in the function-derivative pair.  We also encounter other pairings besides sine and cosine of a trigonometric function and its derivative (up to a constant). Let's recall that if we divide both sides of the Fundamental Trigonometric Identity by , we get and rewriting that to be in terms of and means we get We also recall that the derivative of is , and that the derivative of is . If we have an integral with a product of powers of secant and tangent, as long as the exponents of one or the other satisfy certain conditions, we can do the same thing that we did with sine and cosine: make a substitution and use the (modified) Fundamental Trigonometric Identity to rewrite the other trig function in terms of the one we called .  One Case of Secants and Tangents  Evaluate    Answer: We know that the derivative of is , and that even powers of tangent can be rewritten into secants using .  Let , so that . We factor out a copy of , by splitting the tangents in the numerator and also by multiplying by . .   The key feature in the above example was that the exponent of tangent was odd and positive, so that we could factor out a copy of . If instead the exponent of secant was even and positive, we could have factored out a copy of .   Secant and Tangent, even power of secant  Suppose you have an integral of the form where is an even, positive integer.   Factor out a copy of to serve as the (because is the derivative of ).    Rewrite the remaining still even powers of in terms of using .    Set equal to .       Secant and Tangent, odd power of tangent  Suppose you have an integral of the form where is an odd, positive integer.   Factor out a copy of to serve as the (because is the derivative of ).    Rewrite the remaining now even powers of in terms of using .    Set equal to .      Similarly, dividing both sides of the Fundamental Trigonometric Identity by results in and rewriting that to be in terms of and means we get    Recall that the derivative of is , which is similar in form to the derivative of being ). Recall also that the derivative of is , which is similar in form to the derivative of being . This means that the integrals we consider involving powers of and are of the same forms as the ones involving powers of and , and the methods for evaluating the integrals are analogous.                Perform each of the steps below for each of the integrals above:     Identify the \"key feature\" — which exponent of which trigonometric functions are odd or even, leading to the method of integration we use.    Write the trigonometric identity we use to solve, and if applicable, what the -substitution will be.   Calculate the integral.      Not all integrals are of one of the forms discussed above. Sometimes we still have to rewrite the integrand before we can recognize the form and apply one of our strategies. Sometimes, there's special case to consider. Sometimes we will have to use integration by parts rather than substitution.              Perform each of the steps below for each of the integrals above:     Identify the \"key feature\" — which exponent of which trigonometric functions are odd or even, then say whether or not this was one of the cases we learned an algorithm for.   Write the trigonometric identity we use to solve, if applicable.    Calculate the integral.         Trigonometric Substitution  We've been using a lot of substitution to calculate trigonometric integals, and we've greatly expanded the kinds of integrals we can evaluate, as long as they involve trigonometric functions. There is a saying that might be especially applicable to mathematicians.   If all you have is a hammer, everything looks like a nail.   We try to solve problems using the tools we have. The quote might be implying that a hammer isn't always the best choice, but the following activity is a rather beautiful example of mathematicians figuring out how to use the hammer of our ability to integrate trigonometric functions, even when the integral starts out not looking like it involves trigonometry at all.    The method demonstrated in this activity is most useful when the integral cannot be calculated in another way, but we will consider an example which can also be done with substitution so that we can verify that we obtain the same answer.     State the reason why -substitution cannot be used on the integral .    For the remainder of this activity, we consider . First, calculate the integral using -substitution, with .    We recognize the term is of the form , which reminds us of the hypotenuse of a right triangle, whose legs are and . (We previously did something similar in Calculus I here ).   A right triangle with legs whose lengths are x and a.   Use the triangle to calculate and in terms of .    Use your expression for to solve for , then differentiate to calculate .   Use your expression for to solve for .    Substitute what you've found into , replacing , , and with expressions involving .   Calculate the trigonometric integral, using the method for when the exponent of tangent is odd.   Finally, put the answer back in terms of , using the triangle shown above, and\/or the expressions you already calculated.      There are three of these trigonometric substitutions we commonly use, depending on what the original integrand is.   The usual trigonometric substitutions and their corresponding triangles      right triangle whose legs have lengths of x and a       right triangle whose hypotenuse is x       right triangle whose hypotenuse is a        Summary     We practice our integration techniques of substitution and integration by parts as applied to functions involving products of trigonometric functions.    We use the Fundamental Pythagorean Trigonometric Identity, its two variations, and the two Half-angle Formulas to enable us to calculate antiderivatives of many functions that are a product of trigonometric functions.    We see how to use a trigonometric substitution to transform certain non-trigonometric integrals into trigonometric integrals.       "
},
{
  "id": "sec-trigonometric-ints-2",
  "level": "2",
  "url": "sec-trigonometric-ints.html#sec-trigonometric-ints-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   How can the use of trigonometric identities expand the kinds of functions we can integrate?    How do we recognize which trigonometric identities to use in different integration problems?    How can we integrate functions which don't appear to involve trigonometry by making use of a trigonometric substitution?    "
},
{
  "id": "int-with-fund-id",
  "level": "2",
  "url": "sec-trigonometric-ints.html#int-with-fund-id",
  "type": "Example",
  "number": "1.1.1",
  "title": "Substitution, with an Additional Step.",
  "body": "Substitution, with an Additional Step  Evaluate    Answer: We try finding a function-derivative pair, but things don't look good, since if then , not . Similarly, if then , not . Trying combinations of and gets messy quickly, since we'd need to use product rule to calculate the derivative, and the integrand is not a sum of terms.  However, we do know something about how and are related to each other. Specifically, the Fundamental Trigonometric Identity says that What if we tried a substitution, and then if we still had either or in our integral, we used the Fundamental Trigonometric Identity to rewrite it?  Let's try , so that . Then .  Note that this was mostly using our familiar technique of substitution, once we recognized when we needed to use a trigonometric identity to rewrite something we had remaining in our integral.  "
},
{
  "id": "int-with-half-angle",
  "level": "2",
  "url": "sec-trigonometric-ints.html#int-with-half-angle",
  "type": "Example",
  "number": "1.1.2",
  "title": "Sine and Cosine with Even Exponents.",
  "body": "Sine and Cosine with Even Exponents  Evaluate    Answer: If we rewrote in terms of using the Fundamental Trigonometric identity, then we wouldn't have any copy of leftover to serve as the if we made a substitution.  However, there are two more trigonometric identities we can make use of, called the Half-angle identities    Then .  The Half-angle identity helped because it brought the exponent down by 1, and we know how to calculate antiderivatives for both and .  "
},
{
  "id": "int-with-sec-tan",
  "level": "2",
  "url": "sec-trigonometric-ints.html#int-with-sec-tan",
  "type": "Example",
  "number": "1.1.3",
  "title": "One Case of Secants and Tangents.",
  "body": "One Case of Secants and Tangents  Evaluate    Answer: We know that the derivative of is , and that even powers of tangent can be rewritten into secants using .  Let , so that . We factor out a copy of , by splitting the tangents in the numerator and also by multiplying by . .  "
},
{
  "id": "subsec-sec-tan-and-csc-cot-9",
  "level": "2",
  "url": "sec-trigonometric-ints.html#subsec-sec-tan-and-csc-cot-9",
  "type": "Note",
  "number": "1.1.4",
  "title": "",
  "body": " Recall that the derivative of is , which is similar in form to the derivative of being ). Recall also that the derivative of is , which is similar in form to the derivative of being . This means that the integrals we consider involving powers of and are of the same forms as the ones involving powers of and , and the methods for evaluating the integrals are analogous.  "
},
{
  "id": "subsec-sec-tan-and-csc-cot-10",
  "level": "2",
  "url": "sec-trigonometric-ints.html#subsec-sec-tan-and-csc-cot-10",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "            Perform each of the steps below for each of the integrals above:     Identify the \"key feature\" — which exponent of which trigonometric functions are odd or even, leading to the method of integration we use.    Write the trigonometric identity we use to solve, and if applicable, what the -substitution will be.   Calculate the integral.     "
},
{
  "id": "subsec-sec-tan-and-csc-cot-12",
  "level": "2",
  "url": "sec-trigonometric-ints.html#subsec-sec-tan-and-csc-cot-12",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "            Perform each of the steps below for each of the integrals above:     Identify the \"key feature\" — which exponent of which trigonometric functions are odd or even, then say whether or not this was one of the cases we learned an algorithm for.   Write the trigonometric identity we use to solve, if applicable.    Calculate the integral.      "
},
{
  "id": "subsec-trig-substitution-5",
  "level": "2",
  "url": "sec-trigonometric-ints.html#subsec-trig-substitution-5",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  The method demonstrated in this activity is most useful when the integral cannot be calculated in another way, but we will consider an example which can also be done with substitution so that we can verify that we obtain the same answer.     State the reason why -substitution cannot be used on the integral .    For the remainder of this activity, we consider . First, calculate the integral using -substitution, with .    We recognize the term is of the form , which reminds us of the hypotenuse of a right triangle, whose legs are and . (We previously did something similar in Calculus I here ).   A right triangle with legs whose lengths are x and a.   Use the triangle to calculate and in terms of .    Use your expression for to solve for , then differentiate to calculate .   Use your expression for to solve for .    Substitute what you've found into , replacing , , and with expressions involving .   Calculate the trigonometric integral, using the method for when the exponent of tangent is odd.   Finally, put the answer back in terms of , using the triangle shown above, and\/or the expressions you already calculated.     "
},
{
  "id": "subsec-trig-substitution-7",
  "level": "2",
  "url": "sec-trigonometric-ints.html#subsec-trig-substitution-7",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " The usual trigonometric substitutions and their corresponding triangles      right triangle whose legs have lengths of x and a       right triangle whose hypotenuse is x       right triangle whose hypotenuse is a     "
},
{
  "id": "sec-partial-fractions",
  "level": "1",
  "url": "sec-partial-fractions.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Method of Partial Fractions",
  "body": " The Method of Partial Fractions     How can we integrate rational functions when substitution does not work?    How do we break a rational function up into the sum of simpler rational functions?    What condition must be met in order to rewrite a rational function in this way?       The need to integrate rational functions arises in differential equations and in other settings. If we are lucky, we can use substitution or integration by parts, but oftentimes neither of those methods can be used. In this section, we learn how to use algebra together with our past integration techniques to integrate rational functions.       For each of the indefinite integrals below, decide whether the integral can be evaluated: immediately because it’s a basic integral; using -substitution; using integration by parts; using a combination of multiple techniques; or if none of those will work.                     The Building Blocks of the Method  We are interested in integrating functions which are polynomials divided by polynomials. There are some functions of this form we already know how to do using previous methods. Each of these integrals comes up frequently enough that we collect them here for reference.   Integrals commonly used in partial fractions problems  In all of the following formulas, let and be numbers, with .   Functions which have a linear term in the denominator and a constant in the numerator can be integrated without work since they're almost a basic antiderivative.     Functions which have a power of a linear term in the denominator ( ) and a constant in the numerator can be integrated using the power rule.     Some integrals with a quadratic in the denominator can be done using substitution, since the numerator is a constant multiple of the derivative of the denominator.     Some integrals with a quadratic in the denominator and a constant in the numerator can be done using either trigonometric substitution or regular substitution, leading to the formula        The method of partial fractions we learn in this section could be summarized as the following: reduce all functions of the form polynomial divided by polynomial to sums of functions of the forms above, which we already know how to integrate.     Starting the Method of Partial Fractions  We already had the tools to calculate an integral like because there is a function-derivative pair in the integrand. If we let then , and is a constant multiple of , so we get .  However, what if there isn't a function-derivative pair in the integrand? Consider . Substitution does not help with integrating this function, since if we let then , which is not a constant multiple of . We need to use a completely different strategy to solve this integral.  If we somehow knew that then we could integrate both sides of the equation to get , and the integral on the right involves two nearly-basic antiderivatives, giving us .  Setting aside the question of where the right-hand-side came from for a brief moment, we can verify that is indeed true by recombining the right-hand-side of the equation using a common denominator.   However, we do want to answer the big question: how did we come up with in the first place? And how can we do the same thing to other integrals (reduce a function we can't integrate with the method of substitution to a sum of functions we can integrate more easily?)  One clue is that the denominator of the rational function in the integral factors into two linear terms, , and those are exactly the denominators of the simpler rational functions we used. We will proceed by assuming there is some expression that is equal to the rational function and then solve for what the exact expression is.  Two linear terms  Show that .   Answer: We first factor the denominator and then suppose that for some constants and . If this is true, the integral becomes much easier to calculate, since we can integrate both sides of to get .  We now start the process of solving for the values of and . Multiplying both sides of by the integrand's denominator , we find that which means .  From here, we show one possible method of solving for the values of and .  Because is true for every value of , we can use inspired choices of specific  -values to help us find and .  Taking , we have , so .  Now setting , it follows that , so .  Thus, substituting the values of and into we get .     How the denominator factors matters  The main questions to explore now are: when can we integrate a rational function by rewriting into terms like those above, and what does terms like those mean exactly?        Calculate the integral using the steps below.   Factor the denominator, and rewrite the integrand as a sum where each addend is a constant divided by a factor of the denominator. Use letters like etc., or , etc.    Calculate the antiderivative of the sum while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.        Consider the integral . The denominator is already factored, so we see what happens if we proceed like we did in part a.   Calculate .    Suppose that and multiply both sides of the equation by to obtain an equality with no fractions.    Substitute to solve for the value of , and then substitute to solve for the value of . Does this result in an actual equality of the two sides? What equation involving and do you get if you substituted ?    Why does this show that for any values of and ? How might we change the partial fraction decomposition form to fix this?                 , which means that                           , or     Substituting gives , so .  Substituting gives , so , and thus .  Substituting gives , or .    The equation is not satisfied when and . We could also see that we supposed but the values we found would give us and as functions. Try graphing them to see.            The form of the partial fraction decomposition depends on how the denominator factors.   When we had a numerator of , there are numbers: the coefficient of the term, the coefficient of the term, and the constant term. Using gave us numbers to solve for, and , and in this case, it was impossible to find values of and to make the equality hold. However, we can modify the partial fraction form to introduce a third number.  One quadratic and one linear term  Evaluate .   Answer: We suppose that and note that this gives us constants to work with. We avoid using as a coefficient because we don't want to get it confused with the at the end of an indefinite integral. Before we look for the values of the constants , and , we will first integrate, using three of the building blocks in .   We have obtained a general antiderivative, as long as we can find such numbers , and .  Now that we've done the calculus part, we turn our attention to the algebra. Multiplying both sides of the integrand by , we find that which means .  We have several ways of solving for values of and which make true for all values of . We could...   ... use the black box method. Use a solver like Wolfram Alpha or another computational tool.    ... set equal to different numerical values, as we did in . We could set , then , and then , or choose any three values of that we find easiest to work with.    ... compare coefficients of both sides of the equation and get a system of equations to solve.     We choose to demonstrate the last method here. Multiplying out the right-hand side of and grouping like terms together gives Since the two sides must be equal as polynomials, equal for all values of , this means that the corresponding coefficients must be equal. We now have a system of linear equations to solve, with three equations and three unknowns, which we can solve using any of the usual tools at our disposal. The fastest way of solving for and by hand is combining this linear system with the method of choosing strategic values of .   Setting in yields , and thus , so . Now the system of equations with three unknowns is reduced to having only two unknowns.  Also, since , and comparing coefficients of the terms gave us that , this means that , so . Similarly, since comparing the constant terms gave us that and we know that , this means that .  We had already integrated in , and so substituting the values we've just found for and gives us our final answer of    It's worth noting that if we've had a little bit of matrix theory or linear algebra, we can use matrices to solve a system of linear equations, and that would give us which becomes .  Solving this using Gaussian elimination results in , which does give us the same values of , , and .  However, this matrix form tells us something more: that this system of equations will have a unique solution regardless of the starting coefficients of the quadratic in the numerator of the integrand.   Note that we don't have to use matrices at all - we have other tools for solving a system of equations. However, this example generalizes and bears repeating: as long as the numerator of the integrand is less than or equal to degree , and the denominator factors into a linear and an irreducible quadratic, we can find a partial fraction decomposition and calculate the integral by setting it up in this way, with a constant over the linear factor and a linear term over the quadratic factor. See later for what to do if the degree is greater than or equal to with this same factored form of the denominator.   Furthermore, we can see the problem that occurred when we had the wrong form of the partial fraction decomposition. When we attempted to set and cleared the denominators, we got Setting corresponding coefficients equal gives us which becomes , which row reduces to , an inconsistent system (no possible solutions for and .)  One of the important takeaways from this is that the form of the partial fraction decomposition matters.    General Method of Partial Fractions  Let's collect and summarize what we can say about the possible forms of partial fraction decompositions.   Partial Fraction Decomposition  Given any rational function with the degree of the numerator strictly less than the degree of the denominator, we can rewrite the function as a sum of simpler terms.    Factored Denominator Contains  Partial Fraction Decomposition Contains                    In words, the symbols above say how to rewrite a rational function as a sum based on how the denominator factors:   linear factor  constant divided by the linear term    linear factor raised to an exponent  sum of terms consisting of a constant divided by every power of that linear term starting at and going up to the value of the exponent    unfactorable quadratic  linear expression divided by the quadratic    unfactorable quadratic raised to an exponent  sum of terms consisting of a linear expression divided by every power of that quadratic starting at and going up to the value of the exponent        Don't Forget to Factor   What is the partial fraction decomposition of ?           This would be true if the denominator was linear instead of quadratic.           This would be true if the denominator was an unfactorable quadratic, but the denominator can be factored.           Correct!       Powers   What is the partial fraction decomposition of ?           This would be true if both exponents of the original denominator were 1, but there's an exponent of 2.           This would be true if the denominator had an unfactorable quadratic instead of a power of a linear term.           This is not enough terms to account for all the possible original numerators when the denominator has a power of a linear term.           Correct!       Powers again   What is the partial fraction decomposition of ?           Technically correct, but not the best choice for this particular example. Look at the original numerator again.           Correct! Because the original numerator was a constant, and thus in fact, A=5. (If this needed to be integrated, we can use the power rule straightaway, no partial fractions work is required.)        Consider      For each of the integrals above,   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.              , so                      , so          We highly recommend substituting and and then comparing like coefficients.             When The Degree of the Numerator is Greater Than Or Equal to the Degree of the Denominator  We noted above that these partial fraction decomposition forms have enough constants to solve for every possible numerator only when the degree of the numerator is strictly less than the degree of the denominator. What if the degree of the numerator is too large?  In that case, we use polynomial division to rewrite the original integrand as the sum of a polynomial and a fraction whose numerator does have smaller degree than the denominator. This is not unlike rewriting (where the numerator is bigger than the denominator) as (where not the numerator is smaller than the denominator.) The hard part is figuring out how many times the denominator goes into the numerator evenly.     In this activity, we will calculate      Write a sentence giving the reason why partial fraction decomposition can not be performed on the integrand above in its current form.    Perform polynomial division to rewrite the integrand.    Integrate the terms that can be integrated, and write the general form of the partial fraction decomposition of the rest, using letters like etc, or , etc. Calculate the integral of the partial fraction decomposition while still using letters like etc, or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.          Partial fraction decomposition can only be performed when the degree of the numerator is strictly less than the degree of the denominator.          which integrates to               Final Considerations  An especially astute reader might notice that we said that the denominator can contain terms of the form but we only considered terms of the form in our examples and activities. The reason is that every can be written as if we recall how to complete the square from algebra class, and then using a substitution so that turns this into some constant number multiplied by .  But this turns a calculus problem into even more of an algebra problem, and the focus of this material is integration, not algebra.  You might also be wondering what happens if the denominator doesn't factor into powers of linear and quadratic terms. It is a theorem beyond the scope of this class that every polynomial whose coefficients are real numbers factors into powers of linear and quadratic terms.  The result is that every rational function, regardless of the degree of the numerator or denominator, or how the denominator factors, can be integrated using some combination of the techniques described in this section. Putting that theory into practice, however, is often quite difficult!       Summary     Given any rational function with the degree of the numerator strictly less than the degree of the denominator, we can rewrite the function as a sum of terms of the form where , , , , and are real numbers, and is a natural number.    Which of the forms are included in the decomposition of a rational function depends entirely on the factored form of the denominator, and each of those forms can be integrated using basic integrals, substitution, and\/or trigonometric substitution, possibly requiring some algebra.    Similar to how every improper fraction can be expressed as an integer plus a proper fraction, every rational function with the degree of the numerator greater than or equal to the degree of the denominator can be expressed as where is a polynomial and the degree of is strictly less than the degree of .       "
},
{
  "id": "sec-partial-fractions-2",
  "level": "2",
  "url": "sec-partial-fractions.html#sec-partial-fractions-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   How can we integrate rational functions when substitution does not work?    How do we break a rational function up into the sum of simpler rational functions?    What condition must be met in order to rewrite a rational function in this way?     "
},
{
  "id": "PA-5-5a-1",
  "level": "2",
  "url": "sec-partial-fractions.html#PA-5-5a-1",
  "type": "Preview Activity",
  "number": "1.2.1",
  "title": "",
  "body": " For each of the indefinite integrals below, decide whether the integral can be evaluated: immediately because it’s a basic integral; using -substitution; using integration by parts; using a combination of multiple techniques; or if none of those will work.                  "
},
{
  "id": "subsec-pf-building-blocks-4",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-pf-building-blocks-4",
  "type": "Remark",
  "number": "1.2.1",
  "title": "",
  "body": " The method of partial fractions we learn in this section could be summarized as the following: reduce all functions of the form polynomial divided by polynomial to sums of functions of the forms above, which we already know how to integrate.  "
},
{
  "id": "ex-pf-linearterms",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-pf-linearterms",
  "type": "Example",
  "number": "1.2.2",
  "title": "Two linear terms.",
  "body": "Two linear terms  Show that .   Answer: We first factor the denominator and then suppose that for some constants and . If this is true, the integral becomes much easier to calculate, since we can integrate both sides of to get .  We now start the process of solving for the values of and . Multiplying both sides of by the integrand's denominator , we find that which means .  From here, we show one possible method of solving for the values of and .  Because is true for every value of , we can use inspired choices of specific  -values to help us find and .  Taking , we have , so .  Now setting , it follows that , so .  Thus, substituting the values of and into we get .  "
},
{
  "id": "subsec-when-method-used-3",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-when-method-used-3",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "     Calculate the integral using the steps below.   Factor the denominator, and rewrite the integrand as a sum where each addend is a constant divided by a factor of the denominator. Use letters like etc., or , etc.    Calculate the antiderivative of the sum while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.        Consider the integral . The denominator is already factored, so we see what happens if we proceed like we did in part a.   Calculate .    Suppose that and multiply both sides of the equation by to obtain an equality with no fractions.    Substitute to solve for the value of , and then substitute to solve for the value of . Does this result in an actual equality of the two sides? What equation involving and do you get if you substituted ?    Why does this show that for any values of and ? How might we change the partial fraction decomposition form to fix this?                 , which means that                           , or     Substituting gives , so .  Substituting gives , so , and thus .  Substituting gives , or .    The equation is not satisfied when and . We could also see that we supposed but the values we found would give us and as functions. Try graphing them to see.         "
},
{
  "id": "subsec-when-method-used-4",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-when-method-used-4",
  "type": "Remark",
  "number": "1.2.3",
  "title": "",
  "body": " The form of the partial fraction decomposition depends on how the denominator factors.  "
},
{
  "id": "subsec-when-method-used-6",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-when-method-used-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "One quadratic and one linear term.",
  "body": "One quadratic and one linear term  Evaluate .   Answer: We suppose that and note that this gives us constants to work with. We avoid using as a coefficient because we don't want to get it confused with the at the end of an indefinite integral. Before we look for the values of the constants , and , we will first integrate, using three of the building blocks in .   We have obtained a general antiderivative, as long as we can find such numbers , and .  Now that we've done the calculus part, we turn our attention to the algebra. Multiplying both sides of the integrand by , we find that which means .  We have several ways of solving for values of and which make true for all values of . We could...   ... use the black box method. Use a solver like Wolfram Alpha or another computational tool.    ... set equal to different numerical values, as we did in . We could set , then , and then , or choose any three values of that we find easiest to work with.    ... compare coefficients of both sides of the equation and get a system of equations to solve.     We choose to demonstrate the last method here. Multiplying out the right-hand side of and grouping like terms together gives Since the two sides must be equal as polynomials, equal for all values of , this means that the corresponding coefficients must be equal. We now have a system of linear equations to solve, with three equations and three unknowns, which we can solve using any of the usual tools at our disposal. The fastest way of solving for and by hand is combining this linear system with the method of choosing strategic values of .   Setting in yields , and thus , so . Now the system of equations with three unknowns is reduced to having only two unknowns.  Also, since , and comparing coefficients of the terms gave us that , this means that , so . Similarly, since comparing the constant terms gave us that and we know that , this means that .  We had already integrated in , and so substituting the values we've just found for and gives us our final answer of   "
},
{
  "id": "multiple-choice-factor",
  "level": "2",
  "url": "sec-partial-fractions.html#multiple-choice-factor",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "Don’t Forget to Factor.",
  "body": " Don't Forget to Factor   What is the partial fraction decomposition of ?           This would be true if the denominator was linear instead of quadratic.           This would be true if the denominator was an unfactorable quadratic, but the denominator can be factored.           Correct!     "
},
{
  "id": "multiple-choice-powers",
  "level": "2",
  "url": "sec-partial-fractions.html#multiple-choice-powers",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "Powers.",
  "body": " Powers   What is the partial fraction decomposition of ?           This would be true if both exponents of the original denominator were 1, but there's an exponent of 2.           This would be true if the denominator had an unfactorable quadratic instead of a power of a linear term.           This is not enough terms to account for all the possible original numerators when the denominator has a power of a linear term.           Correct!     "
},
{
  "id": "multiple-choice-powers-again",
  "level": "2",
  "url": "sec-partial-fractions.html#multiple-choice-powers-again",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "Powers again.",
  "body": " Powers again   What is the partial fraction decomposition of ?           Technically correct, but not the best choice for this particular example. Look at the original numerator again.           Correct! Because the original numerator was a constant, and thus in fact, A=5. (If this needed to be integrated, we can use the power rule straightaway, no partial fractions work is required.)     "
},
{
  "id": "subsec-part-frac-3-7",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-part-frac-3-7",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  Consider      For each of the integrals above,   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.              , so                      , so          We highly recommend substituting and and then comparing like coefficients.          "
},
{
  "id": "subsec-part-frac-4-5",
  "level": "2",
  "url": "sec-partial-fractions.html#subsec-part-frac-4-5",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  In this activity, we will calculate      Write a sentence giving the reason why partial fraction decomposition can not be performed on the integrand above in its current form.    Perform polynomial division to rewrite the integrand.    Integrate the terms that can be integrated, and write the general form of the partial fraction decomposition of the rest, using letters like etc, or , etc. Calculate the integral of the partial fraction decomposition while still using letters like etc, or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.          Partial fraction decomposition can only be performed when the degree of the numerator is strictly less than the degree of the denominator.          which integrates to            "
},
{
  "id": "sec-1-5preview",
  "level": "1",
  "url": "sec-1-5preview.html",
  "type": "Section",
  "number": "1.3",
  "title": "1-5a Preview",
  "body": " 1-5a Preview     Suppose that you are driving a car on the highway using cruise control so that you drive at a constant speed. The time, (measured in hours), it takes to drive 50 miles depends on the constant rate, (measured in miles per hour) at which you are driving. Since   it follows that   and thus we know that  For instance, observe that so it takes of an hour to drive miles at miles per hour, and the point lies on the graph of    Give three points which lie on the graph of separated by commas.  Which of the following statements and explanations is true about the graph of    The function is concave up because as speed goes up, travel time goes up.    The function is concave down because as speed goes up, travel time goes down.    The function is increasing because as speed goes up, travel time goes up.    The function is decreasing because as speed goes up, travel time goes down.                 What is the value of Include units on your answer.  Which of the following is the best explanation of the meaning of this value in context?    is the speed, mph.    is the distance, miles.    is the time it takes to travel miles at a speed of mph.    is how fast the travel time is changing when the car is traveling at a speed of mph.                 Recall the average rate of change of a function on an interval is   Determine the average rate of on the interval  Include units on your answer.          The sign of is  ?   positive   negative   This sign makes sense because    is increasing from to mph.    is decreasing from to mph.    is concave up from to mph.    is concave down from to mph.                 Which of the following explains the meaning of the value of    is the amount of hours has changed from to mph.    is the change in speed from to mph.    is the average change in hours the trip takes when the speed changes from to mph.                "
},
{
  "id": "1-5a_Preview_traveltime_as_functionofspeed",
  "level": "2",
  "url": "sec-1-5preview.html#1-5a_Preview_traveltime_as_functionofspeed",
  "type": "Preview Activity",
  "number": "1.3.1",
  "title": "",
  "body": "   Suppose that you are driving a car on the highway using cruise control so that you drive at a constant speed. The time, (measured in hours), it takes to drive 50 miles depends on the constant rate, (measured in miles per hour) at which you are driving. Since   it follows that   and thus we know that  For instance, observe that so it takes of an hour to drive miles at miles per hour, and the point lies on the graph of    Give three points which lie on the graph of separated by commas.  Which of the following statements and explanations is true about the graph of    The function is concave up because as speed goes up, travel time goes up.    The function is concave down because as speed goes up, travel time goes down.    The function is increasing because as speed goes up, travel time goes up.    The function is decreasing because as speed goes up, travel time goes down.                 What is the value of Include units on your answer.  Which of the following is the best explanation of the meaning of this value in context?    is the speed, mph.    is the distance, miles.    is the time it takes to travel miles at a speed of mph.    is how fast the travel time is changing when the car is traveling at a speed of mph.                 Recall the average rate of change of a function on an interval is   Determine the average rate of on the interval  Include units on your answer.          The sign of is  ?   positive   negative   This sign makes sense because    is increasing from to mph.    is decreasing from to mph.    is concave up from to mph.    is concave down from to mph.                 Which of the following explains the meaning of the value of    is the amount of hours has changed from to mph.    is the change in speed from to mph.    is the average change in hours the trip takes when the speed changes from to mph.               "
},
{
  "id": "sec-8-1exercises",
  "level": "1",
  "url": "sec-8-1exercises.html",
  "type": "Section",
  "number": "1.4",
  "title": "8.1 Exercises and 8.2 Preview",
  "body": " 8.1 Exercises and 8.2 Preview      Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for                                 Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for                                 Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for   What does your answer mean about the quadratic approximation to a quadratic function?                                Let and let We find the values of that make the functions and have the same height, slope, concavity, and third derivative value at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                                                          Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Since we want and to have the same concavity at set  This implies .  Finally, since we want and to have the same third derivative value at set  This implies .  Putting everything together, what is the resulting formula for                                     In the following problem, note that second degree Taylor polynomial is the same as the quadratic approximation we've been studying, and we'll see this terminology again in the following section.     Suppose that is the second degree Taylor polynomial for the function about . What can you say about the signs of , , if has the graph given below?   (For each, enter if the term is positive, and if it is negative. Note that because this is essentially multiple choice problem it will not show which parts of your answer are correct or incorrect.)  is  is  is                  is the second degree Taylor polynomial for about , , which says . Since , ; and since , . In other words, is the -intercept of , is the slope of the tangent line to at and tells us the concavity of near . Thus ; ; and            Let and let We find the values of that make the sine function and its derivative values agree with those of the cubic polynomial at and observe patterns in the derivatives.    Complete the table below by computing derivatives of and evaluating them and the derivatives of at as directed.                                                                                                                        Now, set   and  This implies , , , and .  Putting it all together, what is the resulting formula for                               In our work so far, we ve seen that raising the degree of polynomial improves the approximation of the original function If we decided we wanted to find a degree approximation to we d need to find a polynomial whose value and first derivatives match those of the sine function at  Fill in the blanks below to determine the next six derivatives of up to                                             What is the value of (the nth derivative of evaluated at ) when is even?  ?   0   1   -1   Either 1 or -1   What is the value of (the nth derivative of evaluated at ) when is odd?  ?   0   1   -1   Either 1 or -1                                                  Keeping the former exercise for below here for reference.     Let and let We find the values of that make the functions and have the same height, slope, concavity, and third derivative value at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                                                          Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Since we want and to have the same concavity at set  This implies .  Finally, since we want and to have the same third derivative value at set  This implies .  Putting everything together, what is the resulting formula for                                   "
},
{
  "id": "ex-quadapprox-cos",
  "level": "2",
  "url": "sec-8-1exercises.html#ex-quadapprox-cos",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": "   Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for                             "
},
{
  "id": "ex-quadapprox-ln1plusx",
  "level": "2",
  "url": "sec-8-1exercises.html#ex-quadapprox-ln1plusx",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": "   Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for                             "
},
{
  "id": "ex-quadapprox-quadratic",
  "level": "2",
  "url": "sec-8-1exercises.html#ex-quadapprox-quadratic",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": "   Let and let We find the values of and that make the functions and have the same height, slope, and concavity at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                      Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Finally, since we want and to have the same concavity at set  This implies .  Putting everything together, what is the resulting formula for   What does your answer mean about the quadratic approximation to a quadratic function?                            "
},
{
  "id": "ex-cubicapprox-eneg2x",
  "level": "2",
  "url": "sec-8-1exercises.html#ex-cubicapprox-eneg2x",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": "   Let and let We find the values of that make the functions and have the same height, slope, concavity, and third derivative value at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                                                          Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Since we want and to have the same concavity at set  This implies .  Finally, since we want and to have the same third derivative value at set  This implies .  Putting everything together, what is the resulting formula for                                  "
},
{
  "id": "csafranski__8-_1HW_prob1",
  "level": "2",
  "url": "sec-8-1exercises.html#csafranski__8-_1HW_prob1",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": "  In the following problem, note that second degree Taylor polynomial is the same as the quadratic approximation we've been studying, and we'll see this terminology again in the following section.     Suppose that is the second degree Taylor polynomial for the function about . What can you say about the signs of , , if has the graph given below?   (For each, enter if the term is positive, and if it is negative. Note that because this is essentially multiple choice problem it will not show which parts of your answer are correct or incorrect.)  is  is  is                  is the second degree Taylor polynomial for about , , which says . Since , ; and since , . In other words, is the -intercept of , is the slope of the tangent line to at and tells us the concavity of near . Thus ; ; and       "
},
{
  "id": "ajordan_8a-_2_Preview_sine_Taylor",
  "level": "2",
  "url": "sec-8-1exercises.html#ajordan_8a-_2_Preview_sine_Taylor",
  "type": "Preview Activity",
  "number": "1.4.1",
  "title": "",
  "body": "   Let and let We find the values of that make the sine function and its derivative values agree with those of the cubic polynomial at and observe patterns in the derivatives.    Complete the table below by computing derivatives of and evaluating them and the derivatives of at as directed.                                                                                                                        Now, set   and  This implies , , , and .  Putting it all together, what is the resulting formula for                               In our work so far, we ve seen that raising the degree of polynomial improves the approximation of the original function If we decided we wanted to find a degree approximation to we d need to find a polynomial whose value and first derivatives match those of the sine function at  Fill in the blanks below to determine the next six derivatives of up to                                             What is the value of (the nth derivative of evaluated at ) when is even?  ?   0   1   -1   Either 1 or -1   What is the value of (the nth derivative of evaluated at ) when is odd?  ?   0   1   -1   Either 1 or -1                                                 "
},
{
  "id": "ex-cubicapprox-sin",
  "level": "2",
  "url": "sec-8-1exercises.html#ex-cubicapprox-sin",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": "   Let and let We find the values of that make the functions and have the same height, slope, concavity, and third derivative value at    Complete the table below by computing derivatives of and and evaluating them at as directed.                                                                                                                                          Now, since we want and to have the same height at set  This implies .  Since we want and to have the same slope at set  This implies .  Since we want and to have the same concavity at set  This implies .  Finally, since we want and to have the same third derivative value at set  This implies .  Putting everything together, what is the resulting formula for                                  "
},
{
  "id": "sec-1-7preview",
  "level": "1",
  "url": "sec-1-7preview.html",
  "type": "Section",
  "number": "1.5",
  "title": "1.7 Preview",
  "body": " 1.7 Preview     A function defined on is given by the graph below. Note: to the right of , the graph of is exhibiting infinite oscillatory behavior similar to the function . Assume that .    Part a  Determine each of the following limits. If a limit does not exist, enter DNE.                 Part b  Determine each of the following function values, then indicate whether the limit equals the function value at that point. If a value does not exist, enter DNE.    Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no    Part c  Estimate the each value of , if the derivative exists at . In particular, based on the graph, ask yourself if it is reasonable to say that the graph of has a tangent line at for each of the given -values. If so, visually estimate the slope of the tangent line to find the value of . If the derivative does not exist, enter DNE.                         A function defined on is given by the graph below. Note: to the right of , the graph of is exhibiting infinite oscillatory behavior similar to the function . Assume that .    Part a  Determine each of the following limits. If a limit does not exist, enter DNE.                 Part b  Determine each of the following function values, then indicate whether the limit equals the function value at that point. If a value does not exist, enter DNE.    Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.    Part c  Estimate the each value of , if the derivative exists at . In particular, based on the graph, ask yourself if it is reasonable to say that the graph of has a tangent line at for each of the given -values. If so, visually estimate the slope of the tangent line to find the value of . If the derivative does not exist, enter DNE.                      "
},
{
  "id": "csafranski__1-7Preview_ver1",
  "level": "2",
  "url": "sec-1-7preview.html#csafranski__1-7Preview_ver1",
  "type": "Preview Activity",
  "number": "1.5.1",
  "title": "",
  "body": "   A function defined on is given by the graph below. Note: to the right of , the graph of is exhibiting infinite oscillatory behavior similar to the function . Assume that .    Part a  Determine each of the following limits. If a limit does not exist, enter DNE.                 Part b  Determine each of the following function values, then indicate whether the limit equals the function value at that point. If a value does not exist, enter DNE.    Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no     Does ?  ?   yes   no    Part c  Estimate the each value of , if the derivative exists at . In particular, based on the graph, ask yourself if it is reasonable to say that the graph of has a tangent line at for each of the given -values. If so, visually estimate the slope of the tangent line to find the value of . If the derivative does not exist, enter DNE.                     "
},
{
  "id": "csafranski__1-7Preview_ver2",
  "level": "2",
  "url": "sec-1-7preview.html#csafranski__1-7Preview_ver2",
  "type": "Preview Activity",
  "number": "1.5.2",
  "title": "",
  "body": "   A function defined on is given by the graph below. Note: to the right of , the graph of is exhibiting infinite oscillatory behavior similar to the function . Assume that .    Part a  Determine each of the following limits. If a limit does not exist, enter DNE.                 Part b  Determine each of the following function values, then indicate whether the limit equals the function value at that point. If a value does not exist, enter DNE.    Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.     Does ?  ?   Yes.   No, both the value and limit exist but aren't equal.   No, the value is undefined.   No, the limit does not exist.   No, both the value and the limit don't exist.    Part c  Estimate the each value of , if the derivative exists at . In particular, based on the graph, ask yourself if it is reasonable to say that the graph of has a tangent line at for each of the given -values. If so, visually estimate the slope of the tangent line to find the value of . If the derivative does not exist, enter DNE.                     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
