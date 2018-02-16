import { Category } from "./category.model";
import { Phrase } from "./phrase.model";
import { Quiz } from "./quiz.model";

export interface DefaultSuccessResponse {
  error: string;
  success: boolean;
}

/**
 * Category responses
*/

export interface CategoryGetResponse {
  categories: Category[];
  error?: string;
}

export interface CategoryGetDetailResponse {
  category: Category;
  error?: string;
}

export interface CategoryPostCreateResponse {
  category: Category;
  error?: string;
}


/**
 * Phrase responses
 */

export interface PhraseGetResponse {
  phrases: Phrase[];
  error?: string;
}


export interface PhraseGetDetailResponse {
  phrase: Phrase;
  error?: string;
}

export interface PhrasePostCreateResponse {
  phrase: Phrase;
  error?: string;
}



/**
 * Quiz responses
 */
export interface QuizGetDetailResponse {
  quiz: Quiz;
  error?: string;
}

export interface QuizGetResponse {
  quizzes: Quiz[];
  error?: string;
}

export interface QuizPostCreateResponse {
  quiz: Quiz;
  error: string;
}

