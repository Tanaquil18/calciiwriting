var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "sec-trigonometric-integrals",
  "level": "1",
  "url": "sec-trigonometric-integrals.html",
  "type": "Section",
  "number": "1.1",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals  Nothing here, yet.  "
},
{
  "id": "sec-partial-fractions",
  "level": "1",
  "url": "sec-partial-fractions.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Method of Partial Fractions",
  "body": " The Method of Partial Fractions     How can we integrate rational functions when substitution does not work?    How do we break a rational function up into the sum of simpler rational functions?    What condition must be met in order to rewrite a rational function in this way?       The need to integrate rational functions arises in differential equations and in other settings, and so we wonder about how to integrate them. If we are lucky, we can use substitution or integration by parts, but sometimes neither of those methods can be used.       Do preview activity, at least the first problem with answering whether the integrals are basic, u-sub, combination, or neither.    Integrating A Rational Function with Substitution   Evaluate .    We see a function-derivative pair (up to a constant), since if then . So we rewrite .    In this case, the derivative of the function in the denominator was sitting in the numerator (up to a constant multiple). What if we needed to integrate this instead? ?  If we try to pick , then we calculate that , which does not help us in the numerator.  So we try a different strategy. If we somehow knew that , then we could integrate both sides of the equation to get , and the integral on the right is straightforward, giving us .  We can verify that is indeed true by recombining the right-hand-side of the equation using a common denominator.   The question is: how did we come up with in the first place?  One clue is that the denominator of the rational function in the integral factors into two linear terms, , and those are exactly the denominators of the simpler rational functions we used.  We suppose that and then we can look for the constants and .  Multiplying both sides of this equation by , we find that which means .  Since we want this equation to hold for every value of , we can use inspired choices of specific  -values to help us find and . Taking , we have , so . Choosing , it follows , so . Thus, .    When Can The Methods In This Example Be Used?  Notice that any terms of the form , a number in the numerator divided by a linear term in the denominator, would be similarly easy to integrate, using so that . Then So the question to explore in the next activity is: When can we integrate a rational function by rewriting into terms like this?        Calculate the integral using the steps below.   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.        Consider the integral . The denominator is already factored, so we see what happens if we proceed like we did in part a.   Calculate .    Suppose that and multiply both sides of the equation by to obtain an equality with no fractions.    Substitute to solve for the value of , and then substitute to solve for the value of . Does this result in an actual equality of the two sides? What equation involving and do you get if you substituted ?    Why does this show that for any values of and ? How might we change the partial fraction decomposition form to fix this?                 , which means that                           , or     Substituting gives , so .  Substituting gives , so , and thus .  Substituting gives , or .    The equation is not satisfied when and . We could also see that we supposed but the values we found would give us and as functions. Try graphing them to see.            A Quadratic Term and a Linear Term  As we saw in the activity, we have to be careful with the form of our partial fraction decomposition if factoring the denominator results in anything other than distinct linear terms.  For example, when we had a numerator of , there are numbers: the coefficient of the term, the coefficient of the term, and the constant term. Using gave us numbers to solve for, and , and in this case, it was impossible to find values of and to make the equality hold. But we can modify the partial fraction form to introduce a third number.  Integrating A Rational Function with Substitution   Evaluate .  We suppose that and note that this gives us constants to work with. We avoid using as a coefficient because we don't want to get it confused with the at the end of an indefinite integral. Before we look for the values of the constants , and , we will integrate to make sure this is a better form than the one we started with.  An antiderivative of is . We can calculate and note that the second integral is one of our basic forms, , while the first can be evaluated with substitution taking so that .  Thus we see that if we can find such numbers , and , then we can integrate   Now that we've done the calculus part, we turn our attention to the algebra. Multiplying both sides of the integrand by , we find that which means .  We have several tools in our toolbox for solving for the unknown numbers. We could...   ... use the black box method. Use a solver like Wolfram Alpha or another computational tool.    ... set equal to different values like we've done before. This is slightly more complicated than when the denominator factored into linear terms, but we can still do it, taking , then , then , or any three values of you choose and find easiest to work with.    ... compare coefficients of both sides of the equation and get a system of equations to solve.     Since the first two methods don't give us anything new to discuss, we choose to demonstrate the last method here. Recall that we are trying to solve for the unknown values of , and so that the two sides are equal for all possible values of . This means the two sides must really be the same function of , or the same polynomial of . Multiplying out the right-hand side and grouping like terms together gives Setting like coefficients equal means that (because those are the corresponding coefficients of the term) and (because those are the corresponding coefficients of the term) and (because those are the constant terms).  This gives us a system of linear equations, three equations and three unknowns. Combining this with the second method, of setting to find that and so would reduce this to two unknowns and often be the fastest to solve by hand. (Since and , this means that ; similarly, since , this means that .) Since we already integrated to find that we can substitute the values we've found and calculate that which answers the question we were attempting to solve.  However, it's worth noting that if we've had a little bit of matrix theory or linear algebra, we can use matrices to solve a system of linear equations, and that would give us which becomes .  Solving this using Gaussian elimination results in , which does give us the same values of , , and .  However, this matrix form tells us something more: that this system of equations will have a unique solution regardless of the starting coefficients of the quadratic in the numerator of the integrand.   Note that we don't have to use matrices at all - we have other tools for solving a system of equations. However, this example generalizes and bears repeating: as long as the numerator of the integrand is less than or equal to degree , and the denominator factors into a linear and an irreducible quadratic, we can find a partial fraction decomposition and calculate the integral by setting it up in this way, with a constant over the linear factor and a linear term over the quadratic factor. See later for what to do if the degree is greater than or equal to with this same factored form of the denominator.   Furthermore, we can see the problem that occurred when we had the wrong form of the partial fraction decomposition. When we attempted to set and cleared the denominators, we got Setting corresponding coefficients equal gives us which becomes , which row reduces to , an inconsistent system (no possible solutions for and .)  One of the important takeaways from this is that the form of the partial fraction decomposition matters.      General Method of Partial Fractions  Let's collect and summarize what we can say about the possible forms of partial fraction decompositions.   Partial Fraction Decomposition  Given any rational function with the degree of the numerator strictly less than the degree of the denominator, we can rewrite the function as a sum of simpler terms.    Denominator Contains  Partial Fraction Decomposition Contains                     This can be stated in words in the following way.   When the factored form of the denominator contains a linear term, the partial fraction decomposition contains a constant over that linear term.    When the factored form of the denominator contains a power of a linear term, the partial fraction decomposition contains a constant over every power of that linear term up to the max power.    When the factored form of the denominator contains a quadratic term, the partial fraction decomposition contains a linear term divided by the quadratic term.    When the factored form of the denominator contains a power of a quadratic term, the partial fraction decomposition contains a linear term over every power of that quadratic term up to the max power.        Consider      For each of the integrals above,   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.              , so                      , so          We highly recommend substituting and and then comparing like coefficients.             When The Degree of the Numerator is Greater Than Or Equal to the Degree of the Denominator  Insert stuff about long division, and maybe an example or reminder (if trig integrals including trig sub activity have been covered first) of how     In this activity, we will calculate      Write a senctence giving the reason why partial fraction decomposition can not be performed on the integrand above in its current form.    Perform polynomial division to rewrite the integrand.    Integrate the terms that can be integrated, and write the general form of the partial fraction decomposition of the rest, using letters like etc, or , etc. Calculate the integral of the partial fraction decomposition while still using letters like etc, or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.          Partial fraction decomposition can only be performed when the degree of the numerator is strictly less than the degree of the denominator.          which integrates to               Final Considerations  An especially astute reader might notice that we said that the denominator can contain terms of the form but we only considered terms of the form in our examples and activities. The reason is that every can be written as if we recall how to complete the square from algebra class, and then using a substitution so that turns this into some constant number multiplied by .  But this turns a calculus problem into even more of an algebra problem, and the focus of this material is integration, not algebra.  You might also be wondering what happens if the denominator doesn't factor into powers of linear and quadratic terms. It is a theorem beyond the scope of this class, called the Fundamental Theorem of Algebra, that every polynomial over the real numbers factors into powers of linear and quadratic terms.   The result is that every rational function, regardless of the degree of the numerator or denominator, or how the denominator factors, can be integrated using some combination of the techniques described in this section. Putting that theory into practice, however, is very often no trivial matter!       Summary     Given any rational function with the degree of the numerator strictly less than the degree of the denominator, we can rewrite the function as a sum of terms of the form where , , , , and are real numbers, and is a natural number.    Which of the forms are included in the decomposition of a rational function depends entirely on the factored form of the denominator, and each of those forms can be integrated using basic integrals, substitution, and\/or trigonometric substitution, possibly requiring some algebra.    Similar to how every improper fraction can be expressed as an integer plus a proper fraction, every rational function with the degree of the numerator greater than or equal to the degree of the denominator can be expressed as where is a polynomial and the degree of is strictly less than the degree of .    This means that every rational function has an antiderivative function we can express without an integral.       "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-partial-fractions.html#objectives-1",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   How can we integrate rational functions when substitution does not work?    How do we break a rational function up into the sum of simpler rational functions?    What condition must be met in order to rewrite a rational function in this way?     "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "sec-partial-fractions.html#activity-1",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": " Do preview activity, at least the first problem with answering whether the integrals are basic, u-sub, combination, or neither.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-partial-fractions.html#example-1",
  "type": "Example",
  "number": "1.2.1",
  "title": "Integrating A Rational Function with Substitution.",
  "body": "Integrating A Rational Function with Substitution   Evaluate .    We see a function-derivative pair (up to a constant), since if then . So we rewrite .   "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "sec-partial-fractions.html#activity-2",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "     Calculate the integral using the steps below.   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.        Consider the integral . The denominator is already factored, so we see what happens if we proceed like we did in part a.   Calculate .    Suppose that and multiply both sides of the equation by to obtain an equality with no fractions.    Substitute to solve for the value of , and then substitute to solve for the value of . Does this result in an actual equality of the two sides? What equation involving and do you get if you substituted ?    Why does this show that for any values of and ? How might we change the partial fraction decomposition form to fix this?                 , which means that                           , or     Substituting gives , so .  Substituting gives , so , and thus .  Substituting gives , or .    The equation is not satisfied when and . We could also see that we supposed but the values we found would give us and as functions. Try graphing them to see.         "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-partial-fractions.html#example-2",
  "type": "Example",
  "number": "1.2.2",
  "title": "Integrating A Rational Function with Substitution.",
  "body": "Integrating A Rational Function with Substitution   Evaluate .  We suppose that and note that this gives us constants to work with. We avoid using as a coefficient because we don't want to get it confused with the at the end of an indefinite integral. Before we look for the values of the constants , and , we will integrate to make sure this is a better form than the one we started with.  An antiderivative of is . We can calculate and note that the second integral is one of our basic forms, , while the first can be evaluated with substitution taking so that .  Thus we see that if we can find such numbers , and , then we can integrate   Now that we've done the calculus part, we turn our attention to the algebra. Multiplying both sides of the integrand by , we find that which means .  We have several tools in our toolbox for solving for the unknown numbers. We could...   ... use the black box method. Use a solver like Wolfram Alpha or another computational tool.    ... set equal to different values like we've done before. This is slightly more complicated than when the denominator factored into linear terms, but we can still do it, taking , then , then , or any three values of you choose and find easiest to work with.    ... compare coefficients of both sides of the equation and get a system of equations to solve.     Since the first two methods don't give us anything new to discuss, we choose to demonstrate the last method here. Recall that we are trying to solve for the unknown values of , and so that the two sides are equal for all possible values of . This means the two sides must really be the same function of , or the same polynomial of . Multiplying out the right-hand side and grouping like terms together gives Setting like coefficients equal means that (because those are the corresponding coefficients of the term) and (because those are the corresponding coefficients of the term) and (because those are the constant terms).  This gives us a system of linear equations, three equations and three unknowns. Combining this with the second method, of setting to find that and so would reduce this to two unknowns and often be the fastest to solve by hand. (Since and , this means that ; similarly, since , this means that .) Since we already integrated to find that we can substitute the values we've found and calculate that which answers the question we were attempting to solve.  However, it's worth noting that if we've had a little bit of matrix theory or linear algebra, we can use matrices to solve a system of linear equations, and that would give us which becomes .  Solving this using Gaussian elimination results in , which does give us the same values of , , and .  However, this matrix form tells us something more: that this system of equations will have a unique solution regardless of the starting coefficients of the quadratic in the numerator of the integrand.   Note that we don't have to use matrices at all - we have other tools for solving a system of equations. However, this example generalizes and bears repeating: as long as the numerator of the integrand is less than or equal to degree , and the denominator factors into a linear and an irreducible quadratic, we can find a partial fraction decomposition and calculate the integral by setting it up in this way, with a constant over the linear factor and a linear term over the quadratic factor. See later for what to do if the degree is greater than or equal to with this same factored form of the denominator.   Furthermore, we can see the problem that occurred when we had the wrong form of the partial fraction decomposition. When we attempted to set and cleared the denominators, we got Setting corresponding coefficients equal gives us which becomes , which row reduces to , an inconsistent system (no possible solutions for and .)  One of the important takeaways from this is that the form of the partial fraction decomposition matters.   "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "sec-partial-fractions.html#activity-3",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  Consider      For each of the integrals above,   Factor the denominator, and use that factorization to write the general form of the partial fraction decomposition of the integrand, using letters like etc., or , etc.    Calculate the antiderivatives of the partial fraction decomposition while still using letters like etc., or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.              , so                      , so          We highly recommend substituting and and then comparing like coefficients.          "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "sec-partial-fractions.html#activity-4",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  In this activity, we will calculate      Write a senctence giving the reason why partial fraction decomposition can not be performed on the integrand above in its current form.    Perform polynomial division to rewrite the integrand.    Integrate the terms that can be integrated, and write the general form of the partial fraction decomposition of the rest, using letters like etc, or , etc. Calculate the integral of the partial fraction decomposition while still using letters like etc, or , etc.    Finally, the least important step for calculus but often the most algebraically intense to do by hand, solve for the values of the letters you used, and write the final answer to the given integral.          Partial fraction decomposition can only be performed when the degree of the numerator is strictly less than the degree of the denominator.          which integrates to            "
},
{
  "id": "sec-parametric",
  "level": "1",
  "url": "sec-parametric.html",
  "type": "Section",
  "number": "1.3",
  "title": "Parametric Functions: Derivatives, Area, and Arclength",
  "body": " Parametric Functions: Derivatives, Area, and Arclength  Nothing here, yet.  "
},
{
  "id": "sec-polar",
  "level": "1",
  "url": "sec-polar.html",
  "type": "Section",
  "number": "1.4",
  "title": "Polar Functions: Derivatives, Area, and Arclength",
  "body": " Polar Functions: Derivatives, Area, and Arclength  Nothing here, yet.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
