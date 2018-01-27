import PropTypes        from 'prop-types';
import Head             from 'next/head';
import { Grid }         from 'react-bootstrap';
import MadeWithLoveByMe from 'components/MadeWithLoveByMe/MadeWithLoveByMe';
import ConfigHelper     from 'helpers/config';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        {/* Latest compiled and minified CSS */}
        <link
          rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>

      <Grid fluid={true}>
        { children }
        <MadeWithLoveByMe />
      </Grid>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title:    PropTypes.string,
};

Layout.defaultProps = {
  title: ConfigHelper.getConfig('app_name'),
};

export default Layout;
