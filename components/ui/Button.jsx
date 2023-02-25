import Link from 'next/link';
import classes from './Button.module.css';

function Button(props) {
	const { link, onClick, children } = props;

	// if link prop is defined, render a link button else render a normal button
	if (link) {
		return (
			<Link className={classes.btn} href={props.link}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={classes.btn}>
			{props.children}
		</button>
	);
}
export default Button;
