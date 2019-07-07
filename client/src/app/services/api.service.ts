import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Teatro } from '../models/teatro';
import { SiteVendaIngresso } from '../models/site';
import { Promocao } from '../models/promocao';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/GrailsAngularWEBRS";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTeatros (): Observable<Teatro[]> {
    const url = `${apiUrl}/teatros`;
    return this.http.get<Teatro[]>(url)
      .pipe(
        tap(heroes => console.log('getTeatros')),
        catchError(this.handleError('getTeatros', []))
      );
  }

  getTeatro(id: number): Observable<Teatro> {
    const url = `${apiUrl}/teatros/${id}`;
    return this.http.get<Teatro>(url).pipe(
      tap(_ => console.log(`getTeatro id=${id}`)),
      catchError(this.handleError<Teatro>(`getTeatro id=${id}`))
    );
  }

  addTeatro (teatro): Observable<Teatro> {
    const url = `${apiUrl}/teatros`;
    return this.http.post<Teatro>(url, teatro, httpOptions).pipe(
      tap((teatro: Teatro) => console.log(`addTeatro w/id=${teatro.id}`)),
      catchError(this.handleError<Teatro>('addTeatro'))
    );
  }

  updateTeatro (id, teatro): Observable<any> {
    const url = `${apiUrl}/teatros/${id}`;
    return this.http.put(url, teatro, httpOptions).pipe(
      tap(_ => console.log(`updateTeatro id=${id}`)),
      catchError(this.handleError<any>('updateTeatro'))
    );
  }

  deleteTeatro (id): Observable<Teatro> {
    const url = `${apiUrl}/teatros/${id}`;
    return this.http.delete<Teatro>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteTeatro id=${id}`)),
      catchError(this.handleError<Teatro>('deleteTeatro'))
    );
  }

  getSiteVendaIngressos (): Observable<SiteVendaIngresso[]> {
    const url = `${apiUrl}/sites`;
    return this.http.get<SiteVendaIngresso[]>(url)
      .pipe(
        tap(heroes => console.log('getSiteVendaIngressos')),
        catchError(this.handleError('getSiteVendaIngressos', []))
      );
  }

  getSiteVendaIngresso(id: number): Observable<SiteVendaIngresso> {
    const url = `${apiUrl}/sites/${id}`;
    return this.http.get<SiteVendaIngresso>(url).pipe(
      tap(_ => console.log(`getSiteVendaIngresso id=${id}`)),
      catchError(this.handleError<SiteVendaIngresso>(`getSiteVendaIngresso id=${id}`))
    );
  }

  addSiteVendaIngresso (site): Observable<SiteVendaIngresso> {
    const url = `${apiUrl}/sites`;
    return this.http.post<SiteVendaIngresso>(url, site, httpOptions).pipe(
      tap((site: SiteVendaIngresso) => console.log(`addSiteVendaIngresso w/id=${site.id}`)),
      catchError(this.handleError<SiteVendaIngresso>('addSiteVendaIngresso'))
    );
  }

  updateSiteVendaIngresso (id, site): Observable<any> {
    const url = `${apiUrl}/sites/${id}`;
    return this.http.put(url, site, httpOptions).pipe(
      tap(_ => console.log(`updateSiteVendaIngresso id=${id}`)),
      catchError(this.handleError<any>('updateSiteVendaIngresso'))
    );
  }

  deleteSiteVendaIngresso (id): Observable<SiteVendaIngresso> {
    const url = `${apiUrl}/sites/${id}`;
    return this.http.delete<SiteVendaIngresso>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteSiteVendaIngresso id=${id}`)),
      catchError(this.handleError<SiteVendaIngresso>('deleteSiteVendaIngresso'))
    );
  }
  getPromocoes (): Observable<Promocao[]> {
    const url = `${apiUrl}/promocoes/`;
    return this.http.get<Promocao[]>(url)
      .pipe(
        tap(heroes => console.log('getPromocoes')),
        catchError(this.handleError('getPromocoes', []))
      );
  }

  getPromocao(id: number): Observable<Promocao> {
    const url = `${apiUrl}/promocoes/${id}`;
    return this.http.get<Promocao>(url).pipe(
      tap(_ => console.log(`getPromocao id=${id}`)),
      catchError(this.handleError<Promocao>(`getPromocao id=${id}`))
    );
  }
  getPromocaoData(data: String): Observable<Promocao> {
    const url = `${apiUrl}/promocoes/${data}`;
    return this.http.get<Promocao>(url).pipe(
      tap(_ => console.log(`getPromocao data=${data}`)),
      catchError(this.handleError<Promocao>(`getPromocao data=${data}`))
    );
  }

  addPromocao (promocao): Observable<Promocao> {
    const url = `${apiUrl}/promocoes`;
    return this.http.post<Promocao>(url, promocao, httpOptions).pipe(
      tap((promocao: Promocao) => console.log(`addPromocao w/id=${promocao.id}`)),
      catchError(this.handleError<Promocao>('addPromocao'))
    );
  }

  updatePromocao (id, promocao): Observable<any> {
    const url = `${apiUrl}/promocoes/${id}`;
    return this.http.put(url, promocao, httpOptions).pipe(
      tap(_ => console.log(`updatePromocao id=${id}`)),
      catchError(this.handleError<any>('updatePromocao'))
    );
  }

  deletePromocao (id): Observable<Promocao> {
    const url = `${apiUrl}/promocoes/${id}`;
    return this.http.delete<Promocao>(url, httpOptions).pipe(
      tap(_ => console.log(`deletePromocao id=${id}`)),
      catchError(this.handleError<Promocao>('deletePromocao'))
    );
  }


}

